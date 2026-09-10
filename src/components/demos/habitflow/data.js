// HabitFlow — data model, seed dataset, and storage helpers.
//
// Same philosophy as the Finora demo: a portfolio sandbox, not a real
// product. Nothing leaves the browser. State lives in localStorage under
// STORAGE_KEY so edits survive a reload — "Reset demo data" wipes it back
// to the seed below at any time. Seed dates are generated relative to
// *today* (not hardcoded), so the demo always looks current.

export const CATEGORIES = [
  { id: 'health', label: 'Health', color: '#ff6b4a' },
  { id: 'mind', label: 'Mind', color: '#a78bfa' },
  { id: 'personal', label: 'Personal', color: '#38bdf8' },
  { id: 'work', label: 'Work', color: '#fbbf24' },
]

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1]
}

let counter = 0
export function uid(prefix = 'id') {
  counter += 1
  return `${prefix}-${Date.now().toString(36)}-${counter}`
}

export function daysAgo(n) {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

export function todayISO() {
  return daysAgo(0)
}

export function formatDay(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

// -- Derived values -----------------------------------------------------

export function isDoneOn(completions, habitId, date) {
  return completions.some((c) => c.habitId === habitId && c.date === date)
}

/** Consecutive days completed, walking back from today. Breaks at the first gap. */
export function currentStreak(completions, habitId) {
  let streak = 0
  while (isDoneOn(completions, habitId, daysAgo(streak))) streak += 1
  return streak
}

/** Longest run of consecutive days ever completed for this habit. */
export function bestStreak(completions, habitId) {
  const days = [...new Set(completions.filter((c) => c.habitId === habitId).map((c) => c.date))]
    .map((d) => Math.floor(new Date(`${d}T00:00:00`).getTime() / 86400000))
    .sort((a, b) => a - b)
  let best = 0
  let run = 0
  let prev = null
  for (const day of days) {
    run = prev !== null && day === prev + 1 ? run + 1 : 1
    best = Math.max(best, run)
    prev = day
  }
  return best
}

export function completionsOn(completions, date) {
  return completions.filter((c) => c.date === date).length
}

export function todayProgress(habits, completions) {
  if (habits.length === 0) return 0
  const done = habits.filter((h) => isDoneOn(completions, h.id, todayISO())).length
  return Math.round((done / habits.length) * 100)
}

// -- Seed dataset ---------------------------------------------------------

const HABIT_SEED = [
  { id: 'h-water', name: 'Drink 8 Glasses of Water', category: 'health', frequency: 'daily', offsets: [...Array(24).keys(), 26, 28, 30] },
  { id: 'h-workout', name: 'Morning Workout', category: 'health', frequency: 'daily', offsets: [0, 1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15, 18, 20, 21, 25, 27] },
  { id: 'h-read', name: 'Read 20 Pages', category: 'mind', frequency: 'daily', offsets: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19, 22, 24, 29] },
  { id: 'h-meditate', name: 'Meditate 10 Minutes', category: 'mind', frequency: 'daily', offsets: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 'h-nophone', name: 'No Phone After 10pm', category: 'personal', frequency: 'daily', offsets: [0, 1, 3, 4, 7, 8, 9, 13, 15, 18, 20, 23, 26, 29] },
]

function freshSeed() {
  const habits = HABIT_SEED.map(({ id, name, category, frequency, offsets }) => ({
    id,
    name,
    category,
    frequency,
    createdAt: daysAgo(Math.max(...offsets) + 2),
  }))
  const completions = HABIT_SEED.flatMap(({ id, offsets }) =>
    offsets.map((o) => ({ id: uid('c'), habitId: id, date: daysAgo(o) }))
  )
  const tasks = [
    { id: 'task-1', title: "Plan next week's workouts", done: false, dueDate: daysAgo(-2) },
    { id: 'task-2', title: 'Buy a new water bottle', done: true, dueDate: null },
    { id: 'task-3', title: 'Schedule dentist appointment', done: false, dueDate: daysAgo(-4) },
    { id: 'task-4', title: 'Journal about this week', done: false, dueDate: daysAgo(0) },
    { id: 'task-5', title: 'Order a meditation cushion', done: true, dueDate: null },
  ]
  return { habits, completions, tasks }
}

// -- Storage ----------------------------------------------------------------

const STORAGE_KEY = 'habitflow-demo-v1'

export function loadHabitFlowData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return freshSeed()
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.habits) || !Array.isArray(parsed.completions)) return freshSeed()
    return {
      habits: parsed.habits,
      completions: parsed.completions,
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : [],
    }
  } catch {
    return freshSeed()
  }
}

export function saveHabitFlowData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage full or unavailable — the demo still works for the session.
  }
}

export function resetHabitFlowData() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
  return freshSeed()
}
