import assert from 'node:assert/strict';
import { test } from 'node:test';
import { handleContact } from '../netlify/functions/contact.mjs';

test('email settings accept dashboard and dotenv-style quoting', async () => {
  const originalFetch = globalThis.fetch;
  const sender = 'Arwil Portfolio <onboarding@resend.dev>';
  const recipient = 'owner@example.com';
  try {
    for (const [from, to, expectedFrom] of [
      [sender, recipient, sender],
      [` "${sender}" `, `"${recipient}"`, sender],
      [`'${sender}'`, `'${recipient}'`, sender],
      ['"Arwil Portfolio" <onboarding@resend.dev>', recipient, '"Arwil Portfolio" <onboarding@resend.dev>'],
      ['onboarding@resend.dev', recipient, 'onboarding@resend.dev'],
    ]) {
      let payload;
      globalThis.fetch = async (_url, options) => {
        payload = JSON.parse(options.body);
        return Response.json({ id: 'mock-email' });
      };
      const response = await handleContact(new Request('https://portfolio.example/.netlify/functions/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Visitor', email: 'visitor@example.com', inquiry: 'Hello' }),
      }), { RESEND_API_KEY: 'mock-key', RESEND_FROM_EMAIL: from, CONTACT_TO_EMAIL: to });
      assert.equal(response.status, 200);
      assert.equal(payload.from, expectedFrom);
      assert.deepEqual(payload.to, [recipient]);
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
});
