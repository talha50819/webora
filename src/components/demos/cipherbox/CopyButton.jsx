import { useState } from 'react'
import { IconCheck, IconCopy } from './icons.jsx'

export default function CopyButton({ value, disabled }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!value) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable (permissions, insecure context) — no-op.
    }
  }

  return (
    <button type="button" className="dt-btn dt-btn--ghost" style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }} onClick={handleCopy} disabled={disabled || !value}>
      {copied ? <IconCheck /> : <IconCopy />} {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
