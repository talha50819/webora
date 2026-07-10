# JSK Corporation

Marketing website for JSK Corporation, a digital agency — built with
Next.js (App Router), TypeScript, and Tailwind CSS, exported as a fully
static site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GEMINI_API_KEY`
to enable the AI bar on the homepage, and `NEXT_PUBLIC_WEB3FORMS_KEY` to
enable the contact form.

## Building for production

```bash
npm run build
```

Generates a static `dist/` folder — plain HTML/CSS/JS, no server
required. Preview it locally with `npm run preview`.
