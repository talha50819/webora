import { useState } from 'react'

const COURSES = [
  { id: 'py', name: 'Intro to Python', tags: ['beginner', 'programming'] },
  { id: 'jsds', name: 'Data Structures in JS', tags: ['intermediate', 'programming'] },
  { id: 'uxr', name: 'UX Research Basics', tags: ['beginner', 'design'] },
  { id: 'css', name: 'Advanced CSS Layouts', tags: ['intermediate', 'design'] },
  { id: 'ml', name: 'Machine Learning Foundations', tags: ['advanced', 'programming', 'ai'] },
  { id: 'prompt', name: 'Prompt Engineering 101', tags: ['beginner', 'ai'] },
]

function recommendationsFor(course) {
  return COURSES.filter((c) => c.id !== course.id)
    .map((c) => ({ course: c, shared: c.tags.filter((t) => course.tags.includes(t)) }))
    .filter((r) => r.shared.length > 0)
    .sort((a, b) => b.shared.length - a.shared.length)
    .slice(0, 3)
}

export default function RecommendDemo() {
  const [selected, setSelected] = useState(null)
  const recs = selected ? recommendationsFor(selected) : []

  return (
    <div className="demo-theme--recommend dt-shell">
      <div className="dt-eyebrow">Lernly — pick a course</div>

      <div className="dt-grid-3" style={{ marginBottom: '1.5rem' }}>
        {COURSES.map((c) => (
          <div
            key={c.id}
            className="dt-card"
            style={{
              cursor: 'pointer',
              borderColor: selected?.id === c.id ? 'var(--dt-accent)' : undefined,
              background: selected?.id === c.id ? '#eef0ff' : 'var(--dt-card)',
            }}
            onClick={() => setSelected(c)}
          >
            <div className="dt-heading" style={{ fontSize: '0.95rem' }}>{c.name}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {c.tags.map((t) => (
                <span className="dt-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="dt-card" style={{ background: 'var(--dt-tag-bg)', borderStyle: 'dashed' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--dt-fg-soft)', marginBottom: '0.9rem' }}>
            Because you picked <strong style={{ color: 'var(--dt-fg)' }}>{selected.name}</strong> →
          </div>
          {recs.length === 0 ? (
            <p>No close matches in this demo catalog.</p>
          ) : (
            recs.map(({ course, shared }) => (
              <div className="dt-row" key={course.id} style={{ borderBottomColor: 'rgba(23,26,46,0.08)' }}>
                <span style={{ fontWeight: 600 }}>{course.name}</span>
                <span className="dt-tag">{shared.join(', ')}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
