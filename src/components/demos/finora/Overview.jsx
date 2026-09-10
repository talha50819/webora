import { DonutChart, TrendBars } from './charts.jsx'
import { IconArrowDownRight, IconArrowUpRight } from './icons.jsx'
import { categoryBreakdown, currentMonthKey, formatMoney, getCategory, monthTotals, monthlyTrend, netWorth } from './data.js'

export default function Overview({ accounts, transactions }) {
  const monthKey = currentMonthKey()
  const { income, expense } = monthTotals(transactions, monthKey)
  const savingsRate = income > 0 ? Math.round(((income - expense) / income) * 100) : 0
  const breakdown = categoryBreakdown(transactions, monthKey)
  const trend = monthlyTrend(transactions, 6)
  const recent = [...transactions].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 6)

  return (
    <>
      <div className="fin-balance">
        <div>
          <div className="fin-balance__label">Net worth</div>
          <div className="fin-balance__value">{formatMoney(netWorth(accounts, transactions))}</div>
        </div>
        <div className="fin-balance__stats">
          <div>
            <div className="fin-balance__stat-value" style={{ color: 'var(--dt-accent)' }}>{formatMoney(income)}</div>
            <div className="dt-stat-label">Income this month</div>
          </div>
          <div>
            <div className="fin-balance__stat-value" style={{ color: '#fb7185' }}>{formatMoney(expense)}</div>
            <div className="dt-stat-label">Spent this month</div>
          </div>
          <div>
            <div className="fin-balance__stat-value">{savingsRate}%</div>
            <div className="dt-stat-label">Savings rate</div>
          </div>
        </div>
      </div>

      <div className="dt-grid-2">
        <div className="dt-card">
          <div className="dt-eyebrow">Spending by category — this month</div>
          {breakdown.length === 0 ? (
            <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>No expenses logged yet this month.</p>
          ) : (
            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <DonutChart
                segments={breakdown.map((b) => ({ id: b.categoryId, value: b.total, color: b.category.color }))}
                centerValue={formatMoney(expense)}
                centerLabel="total spent"
              />
              <div style={{ flex: 1, minWidth: '10rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {breakdown.slice(0, 6).map((b) => (
                  <div key={b.categoryId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', gap: '0.6rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
                      <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '50%', background: b.category.color, flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.category.label}</span>
                    </span>
                    <span style={{ flexShrink: 0, fontWeight: 700 }}>{formatMoney(b.total)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="dt-card">
          <div className="dt-eyebrow">Income vs. expenses — last 6 months</div>
          <TrendBars data={trend} />
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem', fontSize: '0.72rem', color: 'var(--dt-fg-soft)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '2px', background: 'var(--dt-accent)' }} /> Income
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '2px', background: '#fb7185' }} /> Expenses
            </span>
          </div>
        </div>
      </div>

      <div className="dt-card" style={{ marginTop: '1rem' }}>
        <div className="dt-eyebrow">Recent activity</div>
        {recent.map((t) => {
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
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--dt-fg-soft)' }}>{cat.label} · {t.date}</span>
                </span>
              </span>
              <span style={{ fontWeight: 700, color: t.type === 'income' ? 'var(--dt-accent)' : 'inherit', flexShrink: 0 }}>
                {t.type === 'income' ? '+' : '-'}{formatMoney(t.amount)}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
