import { useState } from 'react'
import { IconFlame, IconPlus, IconTrash } from './icons.jsx'
import { CATEGORIES, bestStreak, currentStreak, daysAgo, getCategory, isDoneOn, uid } from './data.js'

function MiniStrip({ completions, habitId, days = 14 }) {
  const cells = [...Array(days).keys()].reverse().map((offset) => daysAgo(offset))
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {cells.map((date) => (
        <div
          key={date}
          title={date}
          style={{
            width: '9px',
            height: '9px',
            borderRadius: '2px',
            background: isDoneOn(completions, habitId, date) ? 'var(--dt-accent)' : 'var(--dt-track)',
          }}
        />
      ))}
    </div>
  )
}

export default function Habits({ habits, completions, onAddHabit, onDeleteHabit }) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0].id)
  const [frequency, setFrequency] = useState('daily')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onAddHabit({ id: uid('h'), name: name.trim(), category, frequency, createdAt: daysAgo(0) })
    setName('')
    setCategory(CATEGORIES[0].id)
    setFrequency('daily')
    setShowForm(false)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="hf-section-title" style={{ marginBottom: 0 }}>Your habits</div>
        <button type="button" className="dt-btn" onClick={() => setShowForm((v) => !v)}>
          <IconPlus /> New
        </button>
      </div>

      {showForm && (
        <form className="dt-card" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <label className="dt-label" htmlFor="hf-name">Habit name</label>
          <input id="hf-name" className="dt-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Stretch for 5 minutes" required style={{ marginBottom: '0.75rem' }} />
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <div style={{ flex: 1 }}>
              <label className="dt-label" htmlFor="hf-cat">Category</label>
              <select id="hf-cat" className="dt-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label className="dt-label" htmlFor="hf-freq">Frequency</label>
              <select id="hf-freq" className="dt-select" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>
          <button type="submit" className="dt-btn" style={{ marginTop: '0.9rem', width: '100%', justifyContent: 'center' }}>Create habit</button>
        </form>
      )}

      {habits.map((h) => {
        const cat = getCategory(h.category)
        return (
          <div className="dt-card" key={h.id} style={{ marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{h.name}</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
                  <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: cat.color }} />
                  <span className="dt-stat-label">{cat.label} · {h.frequency}</span>
                </span>
              </div>
              <button type="button" className="dt-icon-btn" aria-label={`Delete ${h.name}`} onClick={() => onDeleteHabit(h.id)}>
                <IconTrash />
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MiniStrip completions={completions} habitId={h.id} />
              <span style={{ display: 'flex', gap: '0.9rem', fontSize: '0.75rem', flexShrink: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--dt-accent)', fontWeight: 700 }}>
                  <IconFlame /> {currentStreak(completions, h.id)}
                </span>
                <span className="dt-stat-label">best {bestStreak(completions, h.id)}</span>
              </span>
            </div>
          </div>
        )
      })}
      {habits.length === 0 && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>No habits yet — create one above.</p>}
    </>
  )
}
