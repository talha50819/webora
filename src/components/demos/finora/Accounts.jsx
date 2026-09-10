import { useState } from 'react'
import { IconPlus, IconTrash, IconWallet } from './icons.jsx'
import { ACCOUNT_TYPES, accountBalance, formatMoney, netWorth, uid } from './data.js'

export default function Accounts({ accounts, transactions, onAddAccount, onDeleteAccount }) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState('checking')
  const [balance, setBalance] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onAddAccount({ id: uid('acc'), name: name.trim(), type, startingBalance: Number(balance) || 0 })
    setName('')
    setBalance('')
    setType('checking')
    setShowForm(false)
  }

  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1rem' }}>
        <div className="dt-stat-value">{formatMoney(netWorth(accounts, transactions))}</div>
        <div className="dt-stat-label">Net worth, across {accounts.length} account{accounts.length === 1 ? '' : 's'}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: 0 }}>Accounts</div>
        <button type="button" className="dt-btn" onClick={() => setShowForm((v) => !v)}>
          <IconPlus /> Add account
        </button>
      </div>

      {showForm && (
        <form className="dt-card" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <div className="dt-grid-3">
            <div>
              <label className="dt-label" htmlFor="acc-name">Account name</label>
              <input id="acc-name" className="dt-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Travel Savings" required />
            </div>
            <div>
              <label className="dt-label" htmlFor="acc-type">Type</label>
              <select id="acc-type" className="dt-select" value={type} onChange={(e) => setType(e.target.value)}>
                {ACCOUNT_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="dt-label" htmlFor="acc-balance">Starting balance</label>
              <input id="acc-balance" className="dt-input" type="number" step="0.01" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="0.00" />
            </div>
          </div>
          <button type="submit" className="dt-btn" style={{ marginTop: '0.9rem' }}>Add account</button>
        </form>
      )}

      <div className="dt-grid-2">
        {accounts.map((a) => {
          const bal = accountBalance(a, transactions)
          const typeLabel = ACCOUNT_TYPES.find((t) => t.id === a.type)?.label || a.type
          return (
            <div className="dt-card" key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <span style={{ display: 'inline-flex', width: '2.1rem', height: '2.1rem', borderRadius: '50%', background: 'var(--dt-tag-bg)', color: 'var(--dt-accent)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconWallet />
                </span>
                <span style={{ overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.name}</span>
                  <span className="dt-stat-label">{typeLabel}</span>
                </span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <span style={{ fontWeight: 700, color: bal < 0 ? '#fb7185' : 'inherit' }}>{formatMoney(bal, { signed: a.type === 'credit' })}</span>
                <button type="button" className="dt-icon-btn" aria-label={`Delete ${a.name}`} onClick={() => onDeleteAccount(a.id)}>
                  <IconTrash />
                </button>
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
