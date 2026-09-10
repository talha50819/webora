import { useState } from 'react'
import CopyButton from './CopyButton.jsx'
import { IconEye, IconEyeOff, IconShuffle } from './icons.jsx'
import { estimateStrength, generatePassword } from './crypto.js'

function StrengthMeter({ password }) {
  const s = estimateStrength(password)
  return (
    <div style={{ marginTop: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
        <span style={{ fontWeight: 700, color: s.color }}>{s.label}</span>
        <span className="dt-stat-label" style={{ marginBottom: 0 }}>{s.bits} bits of entropy</span>
      </div>
      <div className="dt-bar-track">
        <div className="dt-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
      </div>
    </div>
  )
}

export default function Passwords() {
  const [length, setLength] = useState(20)
  const [opts, setOpts] = useState({ lower: true, upper: true, digits: true, symbols: true })
  const [generated, setGenerated] = useState(() => generatePassword({ length: 20, ...{ lower: true, upper: true, digits: true, symbols: true } }))

  const [checked, setChecked] = useState('')
  const [showChecked, setShowChecked] = useState(false)

  function toggle(key) {
    setOpts((o) => {
      const next = { ...o, [key]: !o[key] }
      if (!next.lower && !next.upper && !next.digits && !next.symbols) return o // keep at least one class on
      return next
    })
  }

  function regenerate() {
    setGenerated(generatePassword({ length, ...opts }))
  }

  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Generate a password</div>

        <label className="dt-label" htmlFor="cb-pw-length">Length — {length} characters</label>
        <input
          id="cb-pw-length"
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '1rem', accentColor: 'var(--dt-accent)' }}
        />

        <div className="dt-grid-4" style={{ marginBottom: '1.1rem' }}>
          {[
            ['lower', 'a-z'],
            ['upper', 'A-Z'],
            ['digits', '0-9'],
            ['symbols', '!@#$'],
          ].map(([key, label]) => (
            <label key={key} className="dt-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.7rem' }}>
              <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} style={{ accentColor: 'var(--dt-accent)' }} />
              <span style={{ fontFamily: 'var(--dt-font-mono)', fontSize: '0.82rem' }}>{label}</span>
            </label>
          ))}
        </div>

        <button type="button" className="dt-btn" onClick={regenerate} style={{ marginBottom: '1rem' }}>
          <IconShuffle /> Generate
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.6rem' }}>
          <div className="cb-output" style={{ flex: 1, marginBottom: 0 }}>{generated}</div>
          <CopyButton value={generated} />
        </div>
        <StrengthMeter password={generated} />
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Check a password's strength</div>
        <div style={{ position: 'relative' }}>
          <input
            className="dt-input"
            type={showChecked ? 'text' : 'password'}
            value={checked}
            onChange={(e) => setChecked(e.target.value)}
            placeholder="Type a password to see it scored — nothing is sent anywhere"
            style={{ paddingRight: '2.6rem' }}
          />
          <button
            type="button"
            className="dt-icon-btn"
            style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => setShowChecked((v) => !v)}
            aria-label={showChecked ? 'Hide password' : 'Show password'}
          >
            {showChecked ? <IconEyeOff /> : <IconEye />}
          </button>
        </div>
        <StrengthMeter password={checked} />
      </div>
    </>
  )
}
