import { useState } from 'react'
import { EXPENSE_CATEGORIES, currentMonthKey, formatMoney, monthTotals } from './data.js'

function spentInCategory(transactions, monthKey, categoryId) {
  return transactions
    .filter((t) => t.type === 'expense' && t.categoryId === categoryId && t.date.slice(0, 7) === monthKey)
    .reduce((sum, t) => sum + t.amount, 0)
}

export default function Budgets({ transactions, budgets, onUpdateLimit }) {
  const monthKey = currentMonthKey()
  const { expense: totalSpent } = monthTotals(transactions, monthKey)
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0)

  return (
    <>
      <div className="dt-grid-2" style={{ marginBottom: '1rem' }}>
        <div className="dt-card">
          <div className="dt-stat-value">{formatMoney(totalSpent)}</div>
          <div className="dt-stat-label">Spent this month, across all budgets</div>
        </div>
        <div className="dt-card">
          <div className="dt-stat-value">{formatMoney(totalLimit)}</div>
          <div className="dt-stat-label">Total monthly budget</div>
        </div>
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow">Budgets by category</div>
        {EXPENSE_CATEGORIES.map((cat) => {
          const budget = budgets.find((b) => b.categoryId === cat.id)
          const limit = budget?.limit ?? 0
          const spent = spentInCategory(transactions, monthKey, cat.id)
          const pct = limit > 0 ? Math.min(100, Math.round((spent / limit) * 100)) : 0
          const over = limit > 0 && spent > limit
          return (
            <BudgetRow
              key={cat.id}
              category={cat}
              limit={limit}
              spent={spent}
              pct={pct}
              over={over}
              onUpdateLimit={(v) => onUpdateLimit(cat.id, v)}
            />
          )
        })}
      </div>
    </>
  )
}

function BudgetRow({ category, limit, spent, pct, over, onUpdateLimit }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(String(limit))

  function commit() {
    const v = Number(draft)
    if (v >= 0) onUpdateLimit(v)
    setEditing(false)
  }

  return (
    <div style={{ marginBottom: '1.15rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', gap: '0.6rem', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
          <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '50%', background: category.color }} />
          {category.label}
        </span>
        <span style={{ fontSize: '0.8rem', color: over ? '#fb7185' : 'var(--dt-fg-soft)' }}>
          {formatMoney(spent)} of{' '}
          {editing ? (
            <input
              className="dt-input"
              style={{ display: 'inline-block', width: '5.5rem', padding: '0.25rem 0.5rem' }}
              type="number"
              min="0"
              step="1"
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commit}
              onKeyDown={(e) => e.key === 'Enter' && commit()}
            />
          ) : (
            <button type="button" onClick={() => { setDraft(String(limit)); setEditing(true) }} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              {formatMoney(limit)}
            </button>
          )}
          {over && ' — over budget'}
        </span>
      </div>
      <div className="dt-bar-track">
        <div className="dt-bar-fill" style={{ width: `${pct}%`, background: over ? '#fb7185' : category.color }} />
      </div>
    </div>
  )
}
