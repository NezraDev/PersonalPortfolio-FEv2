import { renderInquiryEmail } from '../lib/inquiry-email.mjs';

const json = (status, body) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export async function handleContact(request, env = process.env) {
  if (request.method !== 'POST') return json(405, { error: 'Method not allowed.' });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json(403, { error: 'Request not allowed.' });
  if (!request.headers.get('content-type')?.includes('application/json')) return json(415, { error: 'Expected JSON.' });
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > 24000) return json(413, { error: 'Your inquiry is too long.' });
  let data;
  try { data = JSON.parse(raw); } catch { return json(400, { error: 'Invalid request.' }); }
  if (!data || typeof data !== 'object') return json(400, { error: 'Invalid request.' });
  if (data.website) return json(200, { success: true });
  const { name, email, inquiry } = data;
  if (typeof name !== 'string' || !name.trim() || name.length > 120 || /[\r\n]/.test(name) ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof inquiry !== 'string' || !inquiry.trim() || inquiry.length > 4000) {
    return json(400, { error: 'Enter your name, a valid email address, and an inquiry of up to 4,000 characters.' });
  }
  const RESEND_API_KEY = env.RESEND_API_KEY?.trim();
  const RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL?.trim();
  const CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL?.trim();
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error('Contact email environment variables are missing.');
    return json(503, { error: 'The contact form is temporarily unavailable. Please use the email link on the contact page.' });
  }
  const content = renderInquiryEmail({ name, email, inquiry });
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email.trim(),
        subject: `Portfolio inquiry from ${name.trim()}`,
        html: content.html,
        text: content.text,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) {
      const details = await response.json().catch(() => null);
      const reason = typeof details?.name === 'string' ? details.name.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 80) : 'unknown';
      console.error('Resend rejected contact email. Status:', response.status, 'Reason:', reason);
      if (response.status === 401) console.error('Verify RESEND_API_KEY is an active Resend sending key.');
      if (response.status === 403) console.error('Verify the sender domain in Resend. The onboarding sender can only send to your Resend account email.');
      if (response.status === 422 || response.status === 400) console.error('Verify RESEND_FROM_EMAIL and CONTACT_TO_EMAIL are valid email addresses.');
      const local = process.env.NODE_ENV === 'development' || process.env.NETLIFY_DEV === 'true';
      const providerMessage = typeof details?.message === 'string' ? details.message.slice(0, 500) : '';
      const message = response.status === 429
        ? 'Too many requests. Please wait a moment before trying again.'
        : local && providerMessage
          ? `Email service: ${providerMessage}`
          : 'Your message could not be sent. Please try again or use the email link.';
      return json(response.status === 429 ? 429 : 502, { error: message });
    }
    return json(200, { success: true });
  } catch {
    console.error('Contact email request failed.');
    return json(502, { error: 'Unable to send right now. Please try again or use the email link.' });
  }
}

export default function contact(request) {
  return handleContact(request);
}

export const config = {
  rateLimit: { action: 'rate_limit', aggregateBy: ['ip', 'domain'], windowSize: 60, windowLimit: 5 },
};
