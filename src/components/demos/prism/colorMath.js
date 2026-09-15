// Prism — real color science, not lookup tables. Hex↔RGB↔HSL conversion,
// WCAG 2.1's actual relative-luminance and contrast-ratio formulas, and a
// generated tint/shade scale. Every number shown in the demo is computed
// from whatever color the visitor picks.

export function hexToRgb(hex) {
  const clean = hex.replace('#', '').trim()
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const bigint = parseInt(full, 16) || 0
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}

export function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')}`
}

export function rgbToHsl({ r, g, b }) {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0)
        break
      case gn:
        h = (bn - rn) / d + 2
        break
      default:
        h = (rn - gn) / d + 4
    }
    h /= 6
  }
  return { h: h * 360, s: s * 100, l: l * 100 }
}

export function hslToRgb({ h, s, l }) {
  const hn = h / 360
  const sn = s / 100
  const ln = l / 100
  if (sn === 0) {
    const v = ln * 255
    return { r: v, g: v, b: v }
  }
  const hue2rgb = (p, q, t) => {
    let tt = t
    if (tt < 0) tt += 1
    if (tt > 1) tt -= 1
    if (tt < 1 / 6) return p + (q - p) * 6 * tt
    if (tt < 1 / 2) return q
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6
    return p
  }
  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn
  const p = 2 * ln - q
  return {
    r: hue2rgb(p, q, hn + 1 / 3) * 255,
    g: hue2rgb(p, q, hn) * 255,
    b: hue2rgb(p, q, hn - 1 / 3) * 255,
  }
}

/** WCAG 2.1 relative luminance — the real formula, not an approximation. */
export function relativeLuminance(rgb) {
  const [rs, gs, bs] = [rgb.r, rgb.g, rgb.b].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/** WCAG 2.1 contrast ratio between two colors, 1:1 to 21:1. */
export function contrastRatio(hexA, hexB) {
  const lA = relativeLuminance(hexToRgb(hexA))
  const lB = relativeLuminance(hexToRgb(hexB))
  const lighter = Math.max(lA, lB)
  const darker = Math.min(lA, lB)
  return (lighter + 0.05) / (darker + 0.05)
}

export function wcagLevel(ratio, largeText = false) {
  const aa = largeText ? 3 : 4.5
  const aaa = largeText ? 4.5 : 7
  if (ratio >= aaa) return 'AAA'
  if (ratio >= aa) return 'AA'
  return 'Fail'
}

/** The more legible of black/white text on a given background, by real contrast math. */
export function idealInkColor(bgHex) {
  return contrastRatio(bgHex, '#000000') >= contrastRatio(bgHex, '#ffffff') ? '#000000' : '#ffffff'
}

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const SCALE_LIGHTNESS = [97, 93, 85, 75, 64, 53, 44, 36, 28, 18]

/** A 10-step tint/shade scale (50–900) generated from one base color. */
export function generateScale(baseHex) {
  const hsl = rgbToHsl(hexToRgb(baseHex))
  const s = Math.min(88, Math.max(hsl.s, 38))
  return SCALE_STEPS.map((step, i) => ({
    step,
    hex: rgbToHex(hslToRgb({ h: hsl.h, s, l: SCALE_LIGHTNESS[i] })),
  }))
}
