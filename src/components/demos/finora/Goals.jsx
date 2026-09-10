import { useState } from 'react'
import { IconCheck, IconPlus, IconTrash } from './icons.jsx'
import { formatMoney, uid } from './data.js'

export default function Goals({ goals, onAddGoal, onDeleteGoal, onAddFunds }) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [target, setTarget] = useState('')
  const [deadline, setDeadline] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const t = Number(target)
    if (!name.trim() || !t || t <= 0) return
    onAddGoal({ id: uid('goal'), name: name.trim(), target: t, saved: 0, deadline: deadline || null })
    setName('')
    setTarget('')
    setDeadline('')
    setShowForm(false)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: 0 }}>Savings goals</div>
        <button type="button" className="dt-btn" onClick={() => setShowForm((v) => !v)}>
          <IconPlus /> New goal
        </button>
      </div>

      {showForm && (
        <form className="dt-card" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <div className="dt-grid-3">
            <div>
              <label className="dt-label" htmlFor="goal-name">Goal name</label>
              <input id="goal-name" className="dt-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. New camera" required />
            </div>
            <div>
              <label className="dt-label" htmlFor="goal-target">Target amount</label>
              <input id="goal-target" className="dt-input" type="number" min="1" step="1" value={target} onChange={(e) => setTarget(e.target.value)} required />
            </div>
            <div>
              <label className="dt-label" htmlFor="goal-deadline">Target date (optional)</label>
              <input id="goal-deadline" className="dt-input" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="dt-btn" style={{ marginTop: '0.9rem' }}>Create goal</button>
        </form>
      )}

      <div className="dt-grid-3">
        {goals.map((g) => (
          <GoalCard key={g.id} goal={g} onDelete={() => onDeleteGoal(g.id)} onAddFunds={(amt) => onAddFunds(g.id, amt)} />
        ))}
      </div>
      {goals.length === 0 && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>No goals yet — create one above.</p>}
    </>
  )
}

function GoalCard({ goal, onDelete, onAddFunds }) {
  const [amount, setAmount] = useState('')
  const pct = Math.min(100, Math.round((goal.saved / goal.target) * 100))
  const reached = goal.saved >= goal.target

  function addFunds(e) {
    e.preventDefault()
    const v = Number(amount)
    if (!v || v <= 0) return
    onAddFunds(v)
    setAmount('')
  }

  return (
    <div className="dt-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{goal.name}</div>
          {goal.deadline && <div className="dt-stat-label">by {goal.deadline}</div>}
        </div>
        <button type="button" className="dt-icon-btn" aria-label="Delete goal" onClick={onDelete}>
          <IconTrash />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="dt-gauge" style={{ '--pct': pct }}>
          <div className="dt-gauge__inner">
            {reached ? (
              <span style={{ color: 'var(--dt-accent)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
                <IconCheck />
                <span className="dt-stat-label">done</span>
              </span>
            ) : (
              <>
                <span className="dt-stat-value" style={{ fontSize: '1.1rem' }}>{pct}%</span>
                <span className="dt-stat-label">saved</span>
              </>
            )}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>{formatMoney(goal.saved)}</div>
          <div className="dt-stat-label">of {formatMoney(goal.target)}</div>
        </div>
      </div>

      <form onSubmit={addFunds} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          className="dt-input"
          type="number"
          min="1"
          step="1"
          placeholder="Add funds"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="dt-btn dt-btn--ghost">Add</button>
      </form>
    </div>
  )
}
