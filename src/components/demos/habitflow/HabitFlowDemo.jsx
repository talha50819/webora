import { useEffect, useState } from 'react'
import Today from './Today.jsx'
import Habits from './Habits.jsx'
import Tasks from './Tasks.jsx'
import Stats from './Stats.jsx'
import { IconBarChart, IconCheckSquare, IconRefreshCw, IconRepeat, IconSun } from './icons.jsx'
import { isDoneOn, loadHabitFlowData, resetHabitFlowData, saveHabitFlowData, uid } from './data.js'

const TABS = [
  { id: 'today', label: 'Today', icon: IconSun },
  { id: 'habits', label: 'Habits', icon: IconRepeat },
  { id: 'tasks', label: 'Tasks', icon: IconCheckSquare },
  { id: 'stats', label: 'Stats', icon: IconBarChart },
]

export default function HabitFlowDemo() {
  const [tab, setTab] = useState('today')
  const [data, setData] = useState(loadHabitFlowData)

  useEffect(() => {
    saveHabitFlowData(data)
  }, [data])

  const { habits, completions, tasks } = data

  function toggleHabit(habitId, date) {
    setData((d) => {
      const done = isDoneOn(d.completions, habitId, date)
      return {
        ...d,
        completions: done
          ? d.completions.filter((c) => !(c.habitId === habitId && c.date === date))
          : [...d.completions, { id: uid('c'), habitId, date }],
      }
    })
  }
  function addHabit(habit) {
    setData((d) => ({ ...d, habits: [...d.habits, habit] }))
  }
  function deleteHabit(id) {
    setData((d) => ({
      ...d,
      habits: d.habits.filter((h) => h.id !== id),
      completions: d.completions.filter((c) => c.habitId !== id),
    }))
  }
  function addTask(task) {
    setData((d) => ({ ...d, tasks: [task, ...d.tasks] }))
  }
  function toggleTask(id) {
    setData((d) => ({ ...d, tasks: d.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) }))
  }
  function deleteTask(id) {
    setData((d) => ({ ...d, tasks: d.tasks.filter((t) => t.id !== id) }))
  }
  function resetAll() {
    setData(resetHabitFlowData())
    setTab('today')
  }

  return (
    <div className="demo-theme--habitflow dt-phone-frame">
      <div className="dt-phone-frame__notch" />
      <div className="dt-phone-frame__screen">
        <div className="hf-topbar">
          <div className="hf-topbar__brand"><IconRepeat /> HabitFlow</div>
          <button type="button" className="dt-icon-btn" aria-label="Reset demo data" title="Reset demo data" onClick={resetAll}>
            <IconRefreshCw />
          </button>
        </div>

        <div className="hf-content">
          {tab === 'today' && (
            <Today
              habits={habits}
              completions={completions}
              tasks={tasks}
              onToggleHabit={toggleHabit}
              onToggleTask={toggleTask}
            />
          )}
          {tab === 'habits' && (
            <Habits habits={habits} completions={completions} onAddHabit={addHabit} onDeleteHabit={deleteHabit} />
          )}
          {tab === 'tasks' && <Tasks tasks={tasks} onAdd={addTask} onToggle={toggleTask} onDelete={deleteTask} />}
          {tab === 'stats' && <Stats habits={habits} completions={completions} />}

          <p className="dt-stat-label" style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            Demo data, stored in this browser only.
          </p>
        </div>

        <div className="hf-tabbar">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="dt-phone-frame__home" />
    </div>
  )
}
