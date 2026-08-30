import { useMemo, useState } from 'react'
import { IconSearch, IconStar } from './icons.jsx'

const COURSES = [
  { id: 'py', name: 'Intro to Python', tags: ['beginner', 'programming'], instructor: 'D. Marsh', rating: 4.8, price: 'Free', img: 'lernly-py-v2', avatar: 'lernly-instr-1' },
  { id: 'jsds', name: 'Data Structures in JS', tags: ['intermediate', 'programming'], instructor: 'A. Lindqvist', rating: 4.6, price: '$29', img: 'lernly-jsds-v2', avatar: 'lernly-instr-2' },
  { id: 'uxr', name: 'UX Research Basics', tags: ['beginner', 'design'], instructor: 'M. Osei', rating: 4.9, price: 'Free', img: 'lernly-uxr-v2', avatar: 'lernly-instr-3' },
  { id: 'css', name: 'Advanced CSS Layouts', tags: ['intermediate', 'design'], instructor: 'R. Kapoor', rating: 4.7, price: '$19', img: 'lernly-css-v2', avatar: 'lernly-instr-4' },
  { id: 'ml', name: 'Machine Learning Foundations', tags: ['advanced', 'programming', 'ai'], instructor: 'S. Chen', rating: 4.5, price: '$49', img: 'lernly-ml-v2', avatar: 'lernly-instr-5' },
  { id: 'prompt', name: 'Prompt Engineering 101', tags: ['beginner', 'ai'], instructor: 'J. Whitfield', rating: 4.8, price: 'Free', img: 'lernly-prompt-v2', avatar: 'lernly-instr-6' },
]

const FILTERS = ['all', 'beginner', 'intermediate', 'advanced', 'design', 'programming', 'ai']

function recommendationsFor(course) {
  return COURSES.filter((c) => c.id !== course.id)
    .map((c) => ({ course: c, shared: c.tags.filter((t) => course.tags.includes(t)) }))
    .filter((r) => r.shared.length > 0)
    .sort((a, b) => b.shared.length - a.shared.length)
    .slice(0, 3)
}

export default function RecommendDemo() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'all' ? COURSES : COURSES.filter((c) => c.tags.includes(filter))),
    [filter],
  )
  const recs = selected ? recommendationsFor(selected) : []

  return (
    <div className="demo-theme--recommend dt-shell">
      <nav className="dt-topnav">
        <div className="dt-topnav__brand">Lernly</div>
        <ul className="dt-topnav__links"><li>Courses</li><li>Paths</li><li>My learning</li></ul>
        <div className="dt-topnav__actions">
          <IconSearch />
        </div>
      </nav>

      <div className="dt-eyebrow">Browse courses</div>
      <div className="dt-chip-row">
        {FILTERS.map((f) => (
          <button
            type="button"
            key={f}
            className={`dt-chip${filter === f ? ' dt-chip--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="dt-grid-3" style={{ marginBottom: '1.75rem' }}>
        {visible.map((c) => (
          <div
            key={c.id}
            className="dt-card"
            style={{
              cursor: 'pointer',
              borderColor: selected?.id === c.id ? 'var(--dt-accent)' : undefined,
            }}
            onClick={() => setSelected(c)}
          >
            <div className="dt-product__img-wrap" style={{ marginBottom: '0.7rem' }}>
              <img src={`https://picsum.photos/seed/${c.img}/400/230`} alt="" style={{ aspectRatio: '15/8' }} />
            </div>
            <div className="dt-heading" style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{c.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <img src={`https://i.pravatar.cc/48?u=${c.avatar}`} alt="" width="20" height="20" style={{ borderRadius: '50%' }} />
              <span className="dt-stat-label" style={{ marginBottom: 0 }}>{c.instructor}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="dt-stars" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <IconStar filled /> <span style={{ color: 'var(--dt-fg)', fontSize: '0.78rem', fontWeight: 600 }}>{c.rating}</span>
              </span>
              <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>{c.price}</span>
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
              <div className="dt-row" key={course.id} style={{ alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <img src={`https://i.pravatar.cc/48?u=${course.avatar}`} alt="" width="22" height="22" style={{ borderRadius: '50%' }} />
                  {course.name}
                </span>
                <span className="dt-tag">{shared.join(', ')}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
