import { useMemo, useState } from 'react'
import { IconCheckCircle, IconCircle, IconPlus, IconTrash } from './icons.jsx'
import { todayISO, uid } from './data.js'

const FILTERS = ['All', 'Active', 'Done']

export default function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'Active') return tasks.filter((t) => !t.done)
    if (filter === 'Done') return tasks.filter((t) => t.done)
    return tasks
  }, [tasks, filter])

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ id: uid('task'), title: title.trim(), done: false, dueDate: dueDate || null })
    setTitle('')
    setDueDate('')
  }

  return (
    <>
      <form className="dt-card" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label className="dt-label" htmlFor="hf-task-title">New task</label>
        <input id="hf-task-title" className="dt-input" type="text" placeholder="What needs doing?" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginBottom: '0.7rem' }} />
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <input className="dt-input" type="date" min={todayISO()} value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={{ flex: 1 }} />
          <button type="submit" className="dt-btn"><IconPlus /> Add</button>
        </div>
      </form>

      <div className="dt-segmented" style={{ marginBottom: '1rem', width: '100%' }}>
        {FILTERS.map((f) => (
          <button key={f} type="button" className={filter === f ? 'is-active' : ''} style={{ flex: 1 }} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="dt-card">
        {filtered.length === 0 && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>Nothing here.</p>}
        {filtered.map((t) => (
          <div className="hf-habit-row" key={t.id}>
            <button type="button" style={{ display: 'flex', color: t.done ? 'var(--dt-accent)' : 'var(--dt-fg-soft)', flexShrink: 0 }} onClick={() => onToggle(t.id)} aria-label="Toggle done">
              {t.done ? <IconCheckCircle /> : <IconCircle />}
            </button>
            <span style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
              <span style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', textDecoration: t.done ? 'line-through' : 'none', opacity: t.done ? 0.55 : 1 }}>
                {t.title}
              </span>
              {t.dueDate && <span className="dt-stat-label">due {t.dueDate}</span>}
            </span>
            <button type="button" className="dt-icon-btn" aria-label={`Delete ${t.title}`} onClick={() => onDelete(t.id)}>
              <IconTrash />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
