// Post-build step: this is a client-rendered React SPA (Vite + React Router),
// so `dist/index.html` only ever ships Home's <head>. Crawlers that execute
// JavaScript (Google, Bing) pick up the correct per-route meta via `useSEO`
// after mount — but social-media link-preview bots (Facebook, Slack, Discord,
// X/Twitter, LinkedIn, iMessage) and any crawler that doesn't run JS fetch the
// raw HTML and would otherwise see Home's title/description/OG tags on every
// inner page.
//
// This script clones the built `dist/index.html` as a template and writes a
// static `index.html` per route (Home overwrites `dist/index.html` itself;
// every other route gets `dist/<path>/index.html`, e.g.
// `dist/services/web-development/index.html`) with the <head> tags swapped
// to that route's real metadata, sourced from
// `src/data/seo-content.js` — the same module the client-side `useSEO` hook
// reads from, so the two can't drift apart. Netlify (and most static hosts)
// serve `<folder>/index.html` for a request to `<folder>`, so this needs no
// server config beyond the existing SPA fallback for genuinely unknown paths.
//
// The React app still owns the actual page content — this only fixes the
// <head> crawlers/bots see before JS runs.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { siteRoutes, buildServiceSeo, SITE_URL } from '../src/data/seo-content.js'
import { services } from '../src/data/services.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const template = readFileSync(join(distDir, 'index.html'), 'utf8')

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function escapeText(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderRoute({ title, description, path, jsonLd, noindex }) {
  const url = `${SITE_URL}${path}`
  let html = template

  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeText(title)}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${escapeAttr(url)}$2`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)
  html = html.replace(/(<meta name="robots" content=")[^"]*(")/, `$1${noindex ? 'noindex, nofollow' : 'index, follow'}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escapeAttr(url)}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)

  if (jsonLd) {
    const script = `<script type="application/ld+json" id="page-jsonld">${JSON.stringify(jsonLd)}</script>\n  </head>`
    html = html.replace('</head>', script)
  }

  return html
}

function writeRoute(route) {
  const html = renderRoute(route)
  // Home ("/") overwrites dist/index.html directly; every other route gets
  // its own dist/<path>/index.html.
  const outDir = route.path === '/' ? distDir : join(distDir, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`  prerendered ${route.path}`)
}

const routes = [
  siteRoutes.home,
  siteRoutes.services,
  siteRoutes.about,
  siteRoutes.work,
  siteRoutes.contact,
  siteRoutes.liveTv,
  ...services.map((s) => buildServiceSeo(s)),
]

console.log(`Prerendering static <head> metadata for ${routes.length} routes...`)
for (const route of routes) writeRoute(route)
console.log('Done.')
