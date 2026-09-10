import { useState } from 'react'
import CopyButton from './CopyButton.jsx'
import { IconAlertTriangle, IconEye, IconEyeOff, IconLock } from './icons.jsx'
import { encryptText } from './crypto.js'

export default function Encrypt() {
  const [message, setMessage] = useState('')
  const [passphrase, setPassphrase] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleEncrypt(e) {
    e.preventDefault()
    if (!message || !passphrase) return
    setBusy(true)
    setError('')
    try {
      const envelope = await encryptText(message, passphrase)
      setOutput(envelope)
    } catch (err) {
      setError(err.message || 'Encryption failed.')
      setOutput('')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <form className="dt-card" onSubmit={handleEncrypt} style={{ marginBottom: '1rem' }}>
        <label className="dt-label" htmlFor="cb-enc-msg">Message to encrypt</label>
        <textarea
          id="cb-enc-msg"
          className="dt-input cb-textarea"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type or paste anything — this stays in your browser."
          style={{ marginBottom: '0.9rem' }}
        />

        <label className="dt-label" htmlFor="cb-enc-pass">Passphrase</label>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <input
            id="cb-enc-pass"
            className="dt-input"
            type={showPass ? 'text' : 'password'}
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="A strong, memorable passphrase"
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

        <button type="submit" className="dt-btn" disabled={busy || !message || !passphrase}>
          <IconLock /> {busy ? 'Encrypting…' : 'Encrypt'}
        </button>
      </form>

      {error && (
        <div className="cb-alert">
          <IconAlertTriangle /> {error}
        </div>
      )}

      {output && (
        <div className="dt-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <div className="dt-eyebrow" style={{ marginBottom: 0 }}>Ciphertext (AES-256-GCM)</div>
            <CopyButton value={output} />
          </div>
          <div className="cb-output">{output}</div>
          <p className="dt-stat-label" style={{ marginTop: '0.75rem' }}>
            Includes a fresh random salt and IV — encrypting the same message twice gives a different ciphertext each time.
          </p>
        </div>
      )}
    </>
  )
}
