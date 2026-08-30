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
    <div>
      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Pick a course (try it)</div>
      <div className="demo-course-grid" style={{ marginBottom: 'var(--space-3)' }}>
        {COURSES.map((c) => (
          <div
            key={c.id}
            className={`demo-course-card ${selected?.id === c.id ? 'selected' : ''}`}
            onClick={() => setSelected(c)}
          >
            <div className="demo-course-card__title">{c.name}</div>
            <div className="tag-list">
              {c.tags.map((t) => (
                <span className="tag" key={t} style={{ fontSize: '0.65rem', padding: '0.25rem 0.5rem' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="demo-cart">
          <div className="type-mono" style={{ fontSize: '0.78rem', marginBottom: '0.75rem', color: 'var(--ink-soft)' }}>
            Because you picked "{selected.name}" →
          </div>
          {recs.length === 0 ? (
            <p>No close matches in this demo catalog.</p>
          ) : (
            recs.map(({ course, shared }) => (
              <div className="demo-cart__row" key={course.id} style={{ alignItems: 'center' }}>
                <span>{course.name}</span>
                <span className="type-mono" style={{ fontSize: '0.7rem', color: 'var(--ink-soft)' }}>
                  shared: {shared.join(', ')}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
