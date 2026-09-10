import { useState } from 'react'
import Encrypt from './Encrypt.jsx'
import Decrypt from './Decrypt.jsx'
import Hash from './Hash.jsx'
import Passwords from './Passwords.jsx'
import { IconHash, IconKey, IconLock, IconRefreshCw, IconUnlock } from './icons.jsx'

const TABS = [
  { id: 'encrypt', label: 'Encrypt', icon: IconLock },
  { id: 'decrypt', label: 'Decrypt', icon: IconUnlock },
  { id: 'hash', label: 'Hash', icon: IconHash },
  { id: 'passwords', label: 'Passwords', icon: IconKey },
]

export default function CipherBoxDemo() {
  const [tab, setTab] = useState('encrypt')
  // Bumping this remounts the active tab, clearing its local state — there's
  // no persisted data model here (see crypto.js: every operation is
  // stateless and nothing is ever stored), so "reset" just means "start over".
  const [resetKey, setResetKey] = useState(0)

  return (
    <div className="demo-theme--cipherbox dt-shell cb-shell">
      <div className="cb-topbar">
        <div className="cb-brand"><IconLock /> CipherBox</div>
        <div className="cb-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon /> {label}
            </button>
          ))}
        </div>
        <button type="button" className="dt-icon-btn" aria-label="Clear all fields" title="Clear all fields" onClick={() => setResetKey((k) => k + 1)}>
          <IconRefreshCw />
        </button>
      </div>

      <div className="cb-body" key={resetKey}>
        {tab === 'encrypt' && <Encrypt />}
        {tab === 'decrypt' && <Decrypt />}
        {tab === 'hash' && <Hash />}
        {tab === 'passwords' && <Passwords />}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          Real AES-256-GCM encryption, PBKDF2 key derivation, and SHA-2 hashing via your browser's native Web Crypto API — nothing here is simulated, and nothing ever leaves this page.
        </p>
      </div>
    </div>
  )
}
