import { useEffect } from 'react'

export const SITE_URL = 'https://webora.is-a.dev'
export const SITE_NAME = 'webora is a dev'

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
 * Sets per-route document title, meta description, canonical URL,
 * Open Graph / Twitter Card tags, robots directive, and optional
 * JSON-LD structured data. Runs client-side on every route change —
 * search engines that execute JavaScript (Google, Bing) pick this up;
 * for crawlers that don't, the static tags in index.html are the fallback.
 */
export function useSEO({ title, description, path = '/', noindex = false, jsonLd = null }) {
  useEffect(() => {
    if (title) document.title = title

    setMetaByName('description', description)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const url = `${SITE_URL}${path}`
    setLink('canonical', url)

    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:site_name', SITE_NAME)

    setMetaByName('twitter:card', 'summary')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)

    setJsonLd(jsonLd)
  }, [title, description, path, noindex, jsonLd])
}
