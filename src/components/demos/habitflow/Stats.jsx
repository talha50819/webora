import { ContributionHeatmap, WeeklyBars } from './charts.jsx'
import { IconFlame } from './icons.jsx'
import { bestStreak, completionsOn, currentStreak, daysAgo } from './data.js'

export default function Stats({ habits, completions }) {
  const bestCurrent = habits.reduce((max, h) => Math.max(max, currentStreak(completions, h.id)), 0)
  const bestEver = habits.reduce((max, h) => Math.max(max, bestStreak(completions, h.id)), 0)
  const last7 = [...Array(7).keys()].map((o) => completionsOn(completions, daysAgo(o)))
  const weekTotal = last7.reduce((a, b) => a + b, 0)
  const weekRate = habits.length > 0 ? Math.round((weekTotal / (habits.length * 7)) * 100) : 0

  return (
    <>
      <div className="dt-grid-3" style={{ marginBottom: '1.25rem' }}>
        <div className="dt-card">
          <div className="dt-stat-value" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <IconFlame /> {bestCurrent}
          </div>
          <div className="dt-stat-label">Best active streak</div>
        </div>
        <div className="dt-card">
          <div className="dt-stat-value">{bestEver}</div>
          <div className="dt-stat-label">Longest streak ever</div>
        </div>
        <div className="dt-card">
          <div className="dt-stat-value">{weekRate}%</div>
          <div className="dt-stat-label">This week's rate</div>
        </div>
      </div>

      <div className="hf-section-title">Last 7 days</div>
      <div className="dt-card" style={{ marginBottom: '1.25rem' }}>
        <WeeklyBars completions={completions} days={7} />
      </div>

      <div className="hf-section-title">Activity, last 10 weeks</div>
      <div className="dt-card">
        <ContributionHeatmap completions={completions} totalHabits={habits.length} days={70} />
      </div>
    </>
  )
}
