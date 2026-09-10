import { useState } from 'react'
import { IconAlertTriangle, IconEye, IconEyeOff, IconSparkles, IconUnlock } from './icons.jsx'
import { decryptText, encryptText } from './crypto.js'

const SAMPLE_MESSAGE = 'This message is genuinely encrypted with AES-256-GCM, right here in your browser.'
const SAMPLE_PASSPHRASE = 'correct-horse-battery-staple'

export default function Decrypt() {
  const [envelope, setEnvelope] = useState('')
  const [passphrase, setPassphrase] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleDecrypt(e) {
    e.preventDefault()
    if (!envelope || !passphrase) return
    setBusy(true)
    setError('')
    setOutput('')
    try {
      const plaintext = await decryptText(envelope, passphrase)
      setOutput(plaintext)
    } catch (err) {
      setError(err.message || 'Decryption failed.')
    } finally {
      setBusy(false)
    }
  }

  async function loadSample() {
    setBusy(true)
    setError('')
    setOutput('')
    const cipher = await encryptText(SAMPLE_MESSAGE, SAMPLE_PASSPHRASE)
    setEnvelope(cipher)
    setPassphrase(SAMPLE_PASSPHRASE)
    setBusy(false)
  }

  return (
    <>
      <form className="dt-card" onSubmit={handleDecrypt} style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <label className="dt-label" htmlFor="cb-dec-cipher" style={{ marginBottom: 0 }}>Ciphertext</label>
          <button type="button" className="dt-btn dt-btn--ghost" style={{ padding: '0.35rem 0.7rem', fontSize: '0.7rem' }} onClick={loadSample}>
            <IconSparkles /> Load a working sample
          </button>
        </div>
        <textarea
          id="cb-dec-cipher"
          className="dt-input cb-textarea"
          rows={4}
          value={envelope}
          onChange={(e) => setEnvelope(e.target.value)}
          placeholder="Paste a CBX1:... envelope from the Encrypt tab"
          style={{ marginBottom: '0.9rem', fontFamily: 'var(--dt-font-mono)' }}
        />

        <label className="dt-label" htmlFor="cb-dec-pass">Passphrase</label>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <input
            id="cb-dec-pass"
            className="dt-input"
            type={showPass ? 'text' : 'password'}
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="The passphrase it was encrypted with"
            style={{ paddingRight: '2.6rem' }}
          />
          <button
            type="button"
            className="dt-icon-btn"
            style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => setShowPass((v) => !v)}
            aria-label={showPass ? 'Hide passphrase' : 'Show passphrase'}
          >
            {showPass ? <IconEyeOff /> : <IconEye />}
          </button>
        </div>

        <button type="submit" className="dt-btn" disabled={busy || !envelope || !passphrase}>
          <IconUnlock /> {busy ? 'Decrypting…' : 'Decrypt'}
        </button>
      </form>

      {error && (
        <div className="cb-alert">
          <IconAlertTriangle /> {error}
        </div>
      )}

      {output && (
        <div className="dt-card">
          <div className="dt-eyebrow" style={{ marginBottom: '0.6rem' }}>Recovered message</div>
          <div className="cb-output" style={{ fontFamily: 'var(--dt-font)', color: 'var(--dt-accent)' }}>{output}</div>
        </div>
      )}
    </>
  )
}
