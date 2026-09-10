// Finora — data model, seed dataset, and storage helpers.
//
// This is a portfolio demo, not a real finance product: nothing here ever
// leaves the browser. State lives in localStorage under STORAGE_KEY purely
// so a visitor's edits (added transactions, goals, etc.) survive a reload —
// "Reset demo data" wipes it back to the seed below at any time.

export const CATEGORIES = [
  { id: 'income', label: 'Income', color: '#34d399' },
  { id: 'housing', label: 'Housing', color: '#60a5fa' },
  { id: 'food', label: 'Food & Dining', color: '#f59e0b' },
  { id: 'transport', label: 'Transport', color: '#a78bfa' },
  { id: 'shopping', label: 'Shopping', color: '#f472b6' },
  { id: 'bills', label: 'Bills & Utilities', color: '#38bdf8' },
  { id: 'entertainment', label: 'Entertainment', color: '#fb923c' },
  { id: 'health', label: 'Health & Fitness', color: '#2dd4bf' },
  { id: 'other', label: 'Other', color: '#94a3b8' },
]

export const EXPENSE_CATEGORIES = CATEGORIES.filter((c) => c.id !== 'income')

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) || EXPENSE_CATEGORIES[EXPENSE_CATEGORIES.length - 1]
}

export const ACCOUNT_TYPES = [
  { id: 'checking', label: 'Checking' },
  { id: 'savings', label: 'Savings' },
  { id: 'credit', label: 'Credit card' },
  { id: 'cash', label: 'Cash' },
]

let counter = 0
export function uid(prefix = 'id') {
  counter += 1
  return `${prefix}-${Date.now().toString(36)}-${counter}`
}

export function formatMoney(amount, { signed = false } = {}) {
  const n = Number(amount) || 0
  const out = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(n))
  if (signed) return n < 0 ? `-${out}` : `+${out}`
  return n < 0 ? `-${out}` : out
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export function monthKeyOf(dateStr) {
  return dateStr.slice(0, 7) // 'YYYY-MM'
}

export function monthLabelOf(monthKey) {
  const [y, m] = monthKey.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'short' })
}

// -- Derived values -------------------------------------------------------

export function accountBalance(account, transactions) {
  const net = transactions
    .filter((t) => t.accountId === account.id)
    .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0)
  return account.startingBalance + net
}

export function netWorth(accounts, transactions) {
  return accounts.reduce((sum, a) => sum + accountBalance(a, transactions), 0)
}

export function monthTotals(transactions, monthKey) {
  const inMonth = transactions.filter((t) => monthKeyOf(t.date) === monthKey)
  const income = inMonth.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const expense = inMonth.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
  return { income, expense, net: income - expense }
}

/** Spend per expense category for a given month, sorted highest first. */
export function categoryBreakdown(transactions, monthKey) {
  const totals = new Map()
  transactions
    .filter((t) => t.type === 'expense' && monthKeyOf(t.date) === monthKey)
    .forEach((t) => totals.set(t.categoryId, (totals.get(t.categoryId) || 0) + t.amount))
  return [...totals.entries()]
    .map(([categoryId, total]) => ({ categoryId, total, category: getCategory(categoryId) }))
    .sort((a, b) => b.total - a.total)
}

/** Last N months (oldest → newest) of income/expense totals, for a trend chart. */
export function monthlyTrend(transactions, monthsBack = 6) {
  const now = new Date()
  const months = []
  for (let i = monthsBack - 1; i >= 0; i -= 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    months.push(key)
  }
  return months.map((key) => ({ month: key, label: monthLabelOf(key), ...monthTotals(transactions, key) }))
}

export function currentMonthKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// -- Seed dataset -----------------------------------------------------------
// A few months of plausible activity for a fictional "Finora" user, so the
// dashboard reads as lived-in on first visit rather than an empty state.

function seedAccounts() {
  return [
    { id: 'acc-checking', name: 'Everyday Checking', type: 'checking', startingBalance: 1200 },
    { id: 'acc-savings', name: 'High-Yield Savings', type: 'savings', startingBalance: 8500 },
    { id: 'acc-credit', name: 'Rewards Credit Card', type: 'credit', startingBalance: -430 },
    { id: 'acc-cash', name: 'Cash Wallet', type: 'cash', startingBalance: 150 },
  ]
}

function seedTransactions() {
  const rows = [
    ['2026-07-01', 'acc-checking', 'income', 'income', 4200, 'Salary — July'],
    ['2026-07-03', 'acc-checking', 'housing', 'expense', 1200, 'Rent'],
    ['2026-07-04', 'acc-checking', 'food', 'expense', 86.4, 'Groceries'],
    ['2026-07-06', 'acc-credit', 'transport', 'expense', 42.1, 'Gas'],
    ['2026-07-08', 'acc-credit', 'entertainment', 'expense', 15.99, 'Streaming subscription'],
    ['2026-07-10', 'acc-credit', 'food', 'expense', 54.2, 'Dinner out'],
    ['2026-07-12', 'acc-credit', 'shopping', 'expense', 120, 'Clothes'],
    ['2026-07-14', 'acc-checking', 'bills', 'expense', 98.3, 'Electricity'],
    ['2026-07-15', 'acc-checking', 'income', 'income', 650, 'Freelance invoice'],
    ['2026-07-16', 'acc-checking', 'health', 'expense', 45, 'Gym membership'],
    ['2026-07-18', 'acc-checking', 'food', 'expense', 92.1, 'Groceries'],
    ['2026-07-20', 'acc-credit', 'transport', 'expense', 28.5, 'Rideshare'],
    ['2026-07-22', 'acc-cash', 'other', 'expense', 35, 'Miscellaneous'],
    ['2026-07-25', 'acc-checking', 'bills', 'expense', 60, 'Internet'],
    ['2026-07-28', 'acc-cash', 'entertainment', 'expense', 32, 'Movies'],

    ['2026-08-01', 'acc-checking', 'income', 'income', 4200, 'Salary — August'],
    ['2026-08-02', 'acc-checking', 'housing', 'expense', 1200, 'Rent'],
    ['2026-08-05', 'acc-checking', 'food', 'expense', 101.75, 'Groceries'],
    ['2026-08-06', 'acc-credit', 'transport', 'expense', 39.8, 'Gas'],
    ['2026-08-09', 'acc-credit', 'shopping', 'expense', 240, 'New headphones'],
    ['2026-08-11', 'acc-checking', 'bills', 'expense', 112.4, 'Electricity'],
    ['2026-08-13', 'acc-credit', 'food', 'expense', 68.9, 'Dinner out'],
    ['2026-08-15', 'acc-checking', 'income', 'income', 480, 'Freelance invoice'],
    ['2026-08-16', 'acc-cash', 'health', 'expense', 22.5, 'Pharmacy'],
    ['2026-08-18', 'acc-credit', 'entertainment', 'expense', 85, 'Concert tickets'],
    ['2026-08-20', 'acc-checking', 'food', 'expense', 88.6, 'Groceries'],
    ['2026-08-22', 'acc-credit', 'transport', 'expense', 19.2, 'Rideshare'],
    ['2026-08-24', 'acc-checking', 'bills', 'expense', 60, 'Internet'],
    ['2026-08-27', 'acc-checking', 'other', 'expense', 50, 'Donation'],
    ['2026-08-29', 'acc-credit', 'shopping', 'expense', 95, 'Shoes'],

    ['2026-09-01', 'acc-checking', 'income', 'income', 4200, 'Salary — September'],
    ['2026-09-02', 'acc-checking', 'housing', 'expense', 1200, 'Rent'],
    ['2026-09-03', 'acc-checking', 'food', 'expense', 78.3, 'Groceries'],
    ['2026-09-05', 'acc-credit', 'transport', 'expense', 44.6, 'Gas'],
    ['2026-09-06', 'acc-checking', 'bills', 'expense', 90.1, 'Electricity'],
    ['2026-09-08', 'acc-credit', 'entertainment', 'expense', 15.99, 'Streaming subscription'],
    ['2026-09-09', 'acc-credit', 'food', 'expense', 41.5, 'Dinner out'],
    ['2026-09-10', 'acc-cash', 'shopping', 'expense', 34.2, 'Books'],
  ]
  return rows.map(([date, accountId, categoryId, type, amount, note], i) => ({
    id: `seed-t${i}`,
    date,
    accountId,
    categoryId,
    type,
    amount,
    note,
  }))
}

function seedBudgets() {
  return [
    { categoryId: 'housing', limit: 1200 },
    { categoryId: 'food', limit: 450 },
    { categoryId: 'transport', limit: 150 },
    { categoryId: 'shopping', limit: 250 },
    { categoryId: 'bills', limit: 300 },
    { categoryId: 'entertainment', limit: 120 },
    { categoryId: 'health', limit: 100 },
    { categoryId: 'other', limit: 80 },
  ]
}

function seedGoals() {
  return [
    { id: 'goal-emergency', name: 'Emergency Fund', target: 10000, saved: 8500, deadline: '2026-12-31' },
    { id: 'goal-japan', name: 'Japan Trip 2027', target: 3000, saved: 950, deadline: '2027-03-01' },
    { id: 'goal-laptop', name: 'New Laptop', target: 1800, saved: 1800, deadline: null },
  ]
}

function freshSeed() {
  return {
    accounts: seedAccounts(),
    transactions: seedTransactions(),
    budgets: seedBudgets(),
    goals: seedGoals(),
  }
}

// -- Storage ----------------------------------------------------------------

const STORAGE_KEY = 'finora-demo-v1'

export function loadFinoraData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return freshSeed()
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.accounts) || !Array.isArray(parsed.transactions)) return freshSeed()
    return {
      accounts: parsed.accounts,
      transactions: parsed.transactions,
      budgets: Array.isArray(parsed.budgets) ? parsed.budgets : seedBudgets(),
      goals: Array.isArray(parsed.goals) ? parsed.goals : [],
    }
  } catch {
    return freshSeed()
  }
}

export function saveFinoraData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage full or unavailable (private browsing, etc.) — the demo still
    // works for the session, it just won't persist across a reload.
  }
}

export function resetFinoraData() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
  return freshSeed()
}
