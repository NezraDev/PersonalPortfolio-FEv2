# Resend contact form setup

The contact modal sends to a Netlify Function at `/.netlify/functions/contact`. The function uses Resend?s REST API; no email SDK is needed. The recipient is configured on the server, and replies go to the visitor?s email address.

## 1. Create Resend credentials

1. Sign in at https://resend.com and create an API key with sending access.
2. For initial setup, use `Arwil Portfolio <onboarding@resend.dev>` as the sender. This test sender can only send to the email associated with your Resend account, so set `CONTACT_TO_EMAIL` to that address.
3. For production, add a domain you own in Resend ? Domains. Add the DNS records Resend provides at your DNS provider and wait for verification. Then use a sender on that domain, such as `Arwil Portfolio <portfolio@yourdomain.com>`.

Never use a visitor?s email or your Gmail address as the sender. Visitors are set as Reply-To instead.

## 2. Add environment variables

Copy `.env.example` to `.env` for local use and fill in:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Your secret Resend API key |
| `RESEND_FROM_EMAIL` | Sender on your verified domain, or the test sender above |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries |

Do not commit `.env` or put keys in React, `netlify.toml`, or any `VITE_` variable.

## 3. Run locally

Your real values belong in `.env`, not `.env.example`. The example is a shareable template and is not loaded. Restart the dev server whenever you change `.env`.

```powershell
# Only copy the template if .env does not already exist:
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
# Fill in .env locally, then:
npm run dev
```

Open the local URL printed by Vite and use Contact ? Send an email. Vite now serves the same contact handler as Netlify, with server-only environment loading. No secret values are injected into React. `npm run preview` only serves static build output; use `npm run dev` or `npx netlify-cli dev` for local email sending.

## 4. Configure Netlify

Enter each variable as a separate key/value in the Netlify dashboard. Unlike a `.env` file, dashboard values should not include wrapping quotes or the `KEY=` prefix:

| Key | Dashboard value |
| --- | --- |
| `RESEND_FROM_EMAIL` | `Arwil Portfolio <onboarding@resend.dev>` |
| `CONTACT_TO_EMAIL` | `arwilmartinparaiso.tech@gmail.com` |

The handler also removes accidental wrapping quotes around complete email settings. Quotes around only a display name are preserved.

In your Netlify project?s environment variables, add the same three variables with Functions scope (or all scopes). Configure values for the deployment contexts you use. Redeploy after saving. The existing `netlify.toml` configures the function directory and build.

Once configured, submit an inquiry from Contact ? Send an email. Check the receiving inbox and Resend email logs. API acceptance does not guarantee inbox delivery; check delivery status in Resend if a message is missing.

## Behavior

- Required fields, server validation, a hidden spam field, and Netlify rate limiting (5 requests per IP/domain per minute).
- Sending state prevents repeated clicks; errors retain the form contents for retry.
- No automatic email is sent to visitors; only your configured inbox receives inquiries.
- No live email has been sent as part of this implementation. Account credentials and domain verification must be completed before sending works.

## References

- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/domains/introduction
- https://docs.netlify.com/build/functions/api/

## Troubleshooting

- 401 from Resend: confirm the API key is active and has sending permission.
- 403 from Resend: verify your sender domain, or use the onboarding sender with your Resend account email as recipient.
- 400/422 from Resend: check sender and receiving address formats.
- 503 from the contact endpoint: one or more server environment variables are missing.
- Works locally but not deployed: configure all three values in Netlify with Functions scope and redeploy. A local `.env` is not automatically uploaded to Netlify.

The server logs the provider status and error category, without printing the API key or inquiry contents.

## Local environment reload fix

The Vite handler loads current values from the local environment files into a server-only configuration object. It does not copy them into `process.env`, which can survive Vite restarts and retain an outdated key. Netlify production still reads its own runtime environment. After this fix, the owner-authorized local inquiry returned HTTP 200 and was accepted by Resend. Inbox delivery is separate from provider acceptance.
