// Tiny dependency-free chart primitives for the Finora demo — no charting
// library pulled in just for two shapes. Pure SVG/CSS, themed via the
// --dt-* custom properties set by .demo-theme--finora.

/**
 * Percentage donut built with the classic stroke-dasharray trick: a circle
 * with r = 15.9155 has a circumference of ~100, so each segment's dasharray
 * can be expressed directly as "percent, 100-percent".
 */
export function DonutChart({ segments, size = 132, thickness = 3.4, centerValue, centerLabel }) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const r = 15.9155
  let cumulative = 0

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg viewBox="0 0 36 36" width={size} height={size}>
        <circle cx="18" cy="18" r={r} fill="none" stroke="var(--dt-track)" strokeWidth={thickness} />
        {total > 0 &&
          segments.map((seg) => {
            const pct = (seg.value / total) * 100
            const circle = (
              <circle
                key={seg.id}
                cx="18"
                cy="18"
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={thickness}
                strokeDasharray={`${pct} ${100 - pct}`}
                strokeDashoffset={25 - cumulative}
                strokeLinecap="butt"
              />
            )
            cumulative += pct
            return circle
          })}
      </svg>
      {(centerValue || centerLabel) && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 0.5rem',
          }}
        >
          {centerValue && <div className="dt-stat-value" style={{ fontSize: '1.05rem' }}>{centerValue}</div>}
          {centerLabel && <div className="dt-stat-label">{centerLabel}</div>}
        </div>
      )}
    </div>
  )
}

/** Grouped income/expense bars, one pair per month. */
export function TrendBars({ data, height = 150 }) {
  const max = Math.max(1, ...data.flatMap((d) => [d.income, d.expense]))
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '1rem', height }}>
      {data.map((d) => (
        <div
          key={d.month}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
            <div
              title={`Income $${d.income.toFixed(0)}`}
              style={{
                width: '10px',
                borderRadius: '2px 2px 0 0',
                background: 'var(--dt-accent)',
                height: `${(d.income / max) * 100}%`,
                minHeight: d.income > 0 ? '3px' : 0,
              }}
            />
            <div
              title={`Expenses $${d.expense.toFixed(0)}`}
              style={{
                width: '10px',
                borderRadius: '2px 2px 0 0',
                background: '#fb7185',
                height: `${(d.expense / max) * 100}%`,
                minHeight: d.expense > 0 ? '3px' : 0,
              }}
            />
          </div>
          <div className="dt-stat-label" style={{ fontSize: '0.62rem' }}>{d.label}</div>
        </div>
      ))}
    </div>
  )
}
