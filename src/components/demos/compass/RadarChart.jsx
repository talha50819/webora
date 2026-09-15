// Dependency-free SVG radar/spider chart — no charting library pulled in
// for one shape. Supports overlaying multiple series (used by the
// Benchmark tab to compare the visitor's scores against a reference).

export default function RadarChart({ categories, series, size = 380, max = 5 }) {
  const n = categories.length
  const cx = size / 2
  const cy = size / 2
  const labelPad = 64
  const r = size / 2 - labelPad

  const angle = (i) => -Math.PI / 2 + i * ((2 * Math.PI) / n)
  const point = (i, value) => {
    const radius = (value / max) * r
    return [cx + radius * Math.cos(angle(i)), cy + radius * Math.sin(angle(i))]
  }

  const rings = [1, 2, 3, 4, 5]
  const axisPoints = categories.map((_, i) => point(i, max))

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: size, display: 'block', margin: '0 auto' }}>
      {rings.map((level) => (
        <polygon
          key={level}
          points={categories.map((_, i) => point(i, level).join(',')).join(' ')}
          fill="none"
          stroke="var(--dt-track)"
          strokeWidth="1"
        />
      ))}

      {axisPoints.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--dt-track)" strokeWidth="1" />
      ))}

      {series.map((s) => (
        <polygon
          key={s.label}
          points={categories.map((_, i) => point(i, s.values[i]).join(',')).join(' ')}
          fill={s.color}
          fillOpacity={s.fillOpacity ?? 0.18}
          stroke={s.color}
          strokeWidth="2"
        />
      ))}

      {categories.map((cat, i) => {
        const [lx, ly] = point(i, max + 0.85)
        return (
          <text
            key={cat.id}
            x={lx}
            y={ly}
            textAnchor={Math.abs(lx - cx) < 4 ? 'middle' : lx > cx ? 'start' : 'end'}
            dominantBaseline="middle"
            fontSize="11"
            fill="var(--dt-fg-soft)"
            fontFamily="var(--dt-font-mono)"
          >
            {cat.chartLabel || cat.label}
          </text>
        )
      })}
    </svg>
  )
}
