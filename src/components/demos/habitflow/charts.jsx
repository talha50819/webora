import { completionsOn, daysAgo, formatDay } from './data.js'

/** Single-value percentage ring — how much of today is done. */
export function ProgressRing({ pct, size = 128, thickness = 10, centerValue, centerLabel }) {
  const r = 15.9155
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg viewBox="0 0 36 36" width={size} height={size}>
        <circle cx="18" cy="18" r={r} fill="none" stroke="var(--dt-track)" strokeWidth={thickness} />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="var(--dt-accent)"
          strokeWidth={thickness}
          strokeDasharray={`${pct} ${100 - pct}`}
          strokeDashoffset="25"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {centerValue && <div className="dt-stat-value" style={{ fontSize: '1.4rem' }}>{centerValue}</div>}
        {centerLabel && <div className="dt-stat-label">{centerLabel}</div>}
      </div>
    </div>
  )
}

/** Single-series bars — completions per day, last N days (oldest → newest). */
export function WeeklyBars({ completions, days = 7, height = 130 }) {
  const data = [...Array(days).keys()]
    .reverse()
    .map((offset) => {
      const date = daysAgo(offset)
      return { date, count: completionsOn(completions, date), label: formatDay(date).slice(0, 3) }
    })
  const max = Math.max(1, ...data.map((d) => d.count))

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.6rem', height }}>
      {data.map((d) => (
        <div key={d.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%', justifyContent: 'center' }}>
            <div
              title={`${d.label}: ${d.count} completed`}
              style={{
                width: '60%',
                maxWidth: '1.4rem',
                borderRadius: '5px 5px 0 0',
                background: 'var(--dt-accent)',
                height: `${(d.count / max) * 100}%`,
                minHeight: d.count > 0 ? '4px' : 0,
              }}
            />
          </div>
          <div className="dt-stat-label" style={{ fontSize: '0.6rem' }}>{d.label}</div>
        </div>
      ))}
    </div>
  )
}

/** GitHub-style contribution heatmap, last N days, oldest → newest, wrapped into weeks. */
export function ContributionHeatmap({ completions, totalHabits, days = 70 }) {
  const cells = [...Array(days).keys()]
    .reverse()
    .map((offset) => {
      const date = daysAgo(offset)
      return { date, count: completionsOn(completions, date) }
    })
  // Pad the front so the grid always starts on a Sunday-aligned column.
  const firstDow = new Date(`${cells[0].date}T00:00:00`).getDay()
  const padded = [...Array(firstDow).fill(null), ...cells]
  const weeks = []
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7))

  function shade(count) {
    if (count === 0) return 'var(--dt-track)'
    const pct = Math.min(1, count / Math.max(1, totalHabits))
    const alpha = 0.25 + pct * 0.75
    return `color-mix(in srgb, var(--dt-accent) ${Math.round(alpha * 100)}%, var(--dt-track))`
  }

  return (
    <div style={{ display: 'flex', gap: '3px', overflowX: 'auto', paddingBottom: '2px' }}>
      {weeks.map((week, wi) => (
        <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {week.map((cell, di) =>
            cell ? (
              <div
                key={cell.date}
                title={`${formatDay(cell.date)}: ${cell.count}/${totalHabits} habits`}
                style={{ width: '10px', height: '10px', borderRadius: '2px', background: shade(cell.count) }}
              />
            ) : (
              <div key={di} style={{ width: '10px', height: '10px' }} />
            )
          )}
        </div>
      ))}
    </div>
  )
}
