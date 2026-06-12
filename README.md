# One Intranet Corporation — PowerToConnect

Public-facing website for One Intranet Corporation, a Philippine telecom and clean-energy company offering Fibre internet and Solar panel installations.

## Stack

Vite + React 18, React Router v6, plain CSS Modules, Vitest + React Testing Library, Vercel serverless + Resend.

## Development

```bash
npm install
npm run dev        # UI only — http://localhost:5173
```

For the contact form to work end-to-end (sends real emails):

```bash
npm install -g vercel
vercel dev         # UI + /api/contact on http://localhost:3000
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=your-inbox@example.com
```

Get a free Resend API key at https://resend.com/api-keys

## Tests

```bash
npm test
```

10 tests across 3 suites: `validateContact` (5), `ContactForm` (2), API handler (3).

## Content

Edit copy in `src/data/` — `services.js`, `projects.js`, `coverage.js`, `team.js`.

## Production deploy

1. Push to GitHub
2. Import into Vercel
3. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel environment settings
4. For production email, verify `oneintranet.co` domain in Resend and update `from` in `api/contact.js`
