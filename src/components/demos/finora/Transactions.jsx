import { useMemo, useState } from 'react'
import { IconArrowDownRight, IconArrowUpRight, IconPlus, IconSearch, IconTrash } from './icons.jsx'
import { CATEGORIES, EXPENSE_CATEGORIES, formatMoney, getCategory, todayISO, uid } from './data.js'

function emptyForm(accounts) {
  return {
    type: 'expense',
    date: todayISO(),
    accountId: accounts[0]?.id || '',
    categoryId: EXPENSE_CATEGORIES[0].id,
    amount: '',
    note: '',
  }
}

export default function Transactions({ transactions, accounts, onAdd, onDelete }) {
  const [form, setForm] = useState(() => emptyForm(accounts))
  const [search, setSearch] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const accountName = (id) => accounts.find((a) => a.id === id)?.name || 'Unknown account'

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return [...transactions]
      .filter((t) => filterCategory === 'all' || t.categoryId === filterCategory)
      .filter((t) => !q || (t.note || '').toLowerCase().includes(q) || getCategory(t.categoryId).label.toLowerCase().includes(q))
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [transactions, search, filterCategory])

  function setType(type) {
    setForm((f) => ({ ...f, type, categoryId: type === 'income' ? 'income' : EXPENSE_CATEGORIES[0].id }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const amount = Number(form.amount)
    if (!amount || amount <= 0 || !form.accountId) return
    onAdd({
      id: uid('t'),
      date: form.date || todayISO(),
      accountId: form.accountId,
      categoryId: form.type === 'income' ? 'income' : form.categoryId,
      type: form.type,
      amount,
      note: form.note.trim(),
    })
    setForm((f) => ({ ...emptyForm(accounts), accountId: f.accountId, type: f.type, categoryId: f.categoryId }))
  }

  return (
    <>
      <form className="dt-card" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div className="dt-eyebrow">Add a transaction</div>
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.9rem' }}>
          <button type="button" className="dt-btn" style={form.type !== 'expense' ? { background: 'transparent', color: 'var(--dt-fg)' } : undefined} onClick={() => setType('expense')}>
            Expense
          </button>
          <button type="button" className="dt-btn" style={form.type !== 'income' ? { background: 'transparent', color: 'var(--dt-fg)' } : undefined} onClick={() => setType('income')}>
            Income
          </button>
        </div>

        <div className="dt-grid-4">
          <div>
            <label className="dt-label" htmlFor="fin-date">Date</label>
            <input id="fin-date" className="dt-input" type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
          </div>
          <div>
            <label className="dt-label" htmlFor="fin-amount">Amount</label>
            <input id="fin-amount" className="dt-input" type="number" min="0.01" step="0.01" placeholder="0.00" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} required />
          </div>
          <div>
            <label className="dt-label" htmlFor="fin-account">Account</label>
            <select id="fin-account" className="dt-select" value={form.accountId} onChange={(e) => setForm((f) => ({ ...f, accountId: e.target.value }))}>
              {accounts.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="dt-label" htmlFor="fin-category">Category</label>
            <select
              id="fin-category"
              className="dt-select"
              value={form.type === 'income' ? 'income' : form.categoryId}
              disabled={form.type === 'income'}
              onChange={(e) => setForm((f) => ({ ...f, categoryId: e.target.value }))}
            >
              {form.type === 'income' ? (
                <option value="income">Income</option>
              ) : (
                EXPENSE_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))
              )}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.9rem', alignItems: 'end', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '10rem' }}>
            <label className="dt-label" htmlFor="fin-note">Note</label>
            <input id="fin-note" className="dt-input" type="text" placeholder="What was this for?" value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} />
          </div>
          <button type="submit" className="dt-btn"><IconPlus /> Add</button>
        </div>
      </form>

      <div className="dt-card">
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '10rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--dt-fg-soft)' }}>
              <IconSearch />
            </span>
            <input
              className="dt-input"
              style={{ paddingLeft: '2.3rem' }}
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select className="dt-select" style={{ width: 'auto', minWidth: '10rem' }} value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>No transactions match.</p>
        ) : (
          filtered.map((t) => {
            const cat = getCategory(t.categoryId)
            return (
              <div className="dt-row" key={t.id}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '1.7rem',
                      height: '1.7rem',
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: t.type === 'income' ? 'var(--dt-tag-bg)' : 'rgba(251, 113, 133, 0.14)',
                      color: t.type === 'income' ? 'var(--dt-accent)' : '#fb7185',
                    }}
                  >
                    {t.type === 'income' ? <IconArrowDownRight /> : <IconArrowUpRight />}
                  </span>
                  <span style={{ overflow: 'hidden' }}>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {t.note || cat.label}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--dt-fg-soft)' }}>
                      {cat.label} · {accountName(t.accountId)} · {t.date}
                    </span>
                  </span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexShrink: 0 }}>
                  <span style={{ fontWeight: 700, color: t.type === 'income' ? 'var(--dt-accent)' : 'inherit' }}>
                    {t.type === 'income' ? '+' : '-'}{formatMoney(t.amount)}
                  </span>
                  <button type="button" className="dt-icon-btn" aria-label="Delete transaction" onClick={() => onDelete(t.id)}>
                    <IconTrash />
                  </button>
                </span>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}
