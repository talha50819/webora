import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../data/seo-content.js'

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE }

function setMetaByName(name, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(jsonLd) {
  let el = document.getElementById('page-jsonld')
  if (!jsonLd) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.id = 'page-jsonld'
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(jsonLd)
}

/**
 * Sets per-route document title, meta description, keywords, canonical URL,
 * Open Graph / Twitter Card tags, robots directive, and optional
 * JSON-LD structured data. Runs client-side on every route change —
 * search engines that execute JavaScript (Google, Bing) pick this up;
 * for crawlers and social link-preview bots that don't, `scripts/prerender-meta.mjs`
 * bakes the same metadata (sourced from `src/data/seo-content.js`) into a
 * static per-route `index.html` at build time as the fallback.
 */
export function useSEO({ title, description, keywords, path = '/', noindex = false, jsonLd = null, image = DEFAULT_OG_IMAGE }) {
  useEffect(() => {
    if (title) document.title = title

    setMetaByName('description', description)
    setMetaByName('keywords', keywords)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const url = `${SITE_URL}${path}`
    setLink('canonical', url)

    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:site_name', SITE_NAME)
    setMetaByProperty('og:image', image)

    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', image)

    setJsonLd(jsonLd)
  }, [title, description, path, noindex, jsonLd, image])
}
