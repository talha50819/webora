import { ProgressRing } from './charts.jsx'
import { IconCheckCircle, IconCircle, IconFlame } from './icons.jsx'
import { currentStreak, getCategory, greeting, isDoneOn, todayISO, todayProgress } from './data.js'

export default function Today({ habits, completions, tasks, onToggleHabit, onToggleTask }) {
  const today = todayISO()
  const pct = todayProgress(habits, completions)
  const doneCount = habits.filter((h) => isDoneOn(completions, h.id, today)).length
  const upcomingTasks = tasks.filter((t) => !t.done).slice(0, 4)
  const dateLabel = new Date(`${today}T00:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <>
      <div className="hf-hero">
        <div>
          <div className="dt-stat-label">{greeting()}</div>
          <div className="hf-hero__date">{dateLabel}</div>
        </div>
        <ProgressRing pct={pct} size={84} thickness={9} centerValue={`${pct}%`} />
      </div>

      <div className="hf-section-title">Today's habits ({doneCount}/{habits.length})</div>
      <div className="dt-card" style={{ marginBottom: '1.25rem' }}>
        {habits.length === 0 && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>No habits yet — add one from the Habits tab.</p>}
        {habits.map((h) => {
          const done = isDoneOn(completions, h.id, today)
          const streak = currentStreak(completions, h.id)
          const cat = getCategory(h.category)
          return (
            <button
              key={h.id}
              type="button"
              className="hf-habit-row"
              onClick={() => onToggleHabit(h.id, today)}
            >
              <span style={{ color: done ? 'var(--dt-accent)' : 'var(--dt-fg-soft)', flexShrink: 0 }}>
                {done ? <IconCheckCircle /> : <IconCircle />}
              </span>
              <span style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', textDecoration: done ? 'line-through' : 'none', opacity: done ? 0.6 : 1 }}>
                  {h.name}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: cat.color }} />
                  <span className="dt-stat-label">{cat.label}</span>
                </span>
              </span>
              {streak > 0 && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--dt-accent)', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                  <IconFlame /> {streak}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="hf-section-title">Tasks</div>
      <div className="dt-card">
        {upcomingTasks.length === 0 && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>All caught up — no open tasks.</p>}
        {upcomingTasks.map((t) => (
          <button key={t.id} type="button" className="hf-habit-row" onClick={() => onToggleTask(t.id)}>
            <span style={{ color: 'var(--dt-fg-soft)', flexShrink: 0 }}>
              <IconCircle />
            </span>
            <span style={{ flex: 1, textAlign: 'left', fontSize: '0.85rem', fontWeight: 600 }}>{t.title}</span>
            {t.dueDate && <span className="dt-stat-label" style={{ flexShrink: 0 }}>{t.dueDate === today ? 'Today' : t.dueDate}</span>}
          </button>
        ))}
      </div>
    </>
  )
}
