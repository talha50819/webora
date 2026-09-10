import { useEffect, useState } from 'react'
import Overview from './Overview.jsx'
import Transactions from './Transactions.jsx'
import Budgets from './Budgets.jsx'
import Goals from './Goals.jsx'
import Accounts from './Accounts.jsx'
import { IconBell, IconGrid, IconList, IconPieChart, IconRefreshCw, IconTarget, IconWallet } from './icons.jsx'
import { loadFinoraData, resetFinoraData, saveFinoraData } from './data.js'

const TABS = [
  { id: 'overview', label: 'Overview', icon: IconGrid },
  { id: 'transactions', label: 'Transactions', icon: IconList },
  { id: 'budgets', label: 'Budgets', icon: IconPieChart },
  { id: 'goals', label: 'Goals', icon: IconTarget },
  { id: 'accounts', label: 'Accounts', icon: IconWallet },
]

export default function FinoraDemo() {
  const [tab, setTab] = useState('overview')
  const [data, setData] = useState(loadFinoraData)

  useEffect(() => {
    saveFinoraData(data)
  }, [data])

  const { accounts, transactions, budgets, goals } = data

  function addTransaction(t) {
    setData((d) => ({ ...d, transactions: [t, ...d.transactions] }))
  }
  function deleteTransaction(id) {
    setData((d) => ({ ...d, transactions: d.transactions.filter((t) => t.id !== id) }))
  }
  function updateBudgetLimit(categoryId, limit) {
    setData((d) => {
      const exists = d.budgets.some((b) => b.categoryId === categoryId)
      return {
        ...d,
        budgets: exists
          ? d.budgets.map((b) => (b.categoryId === categoryId ? { ...b, limit } : b))
          : [...d.budgets, { categoryId, limit }],
      }
    })
  }
  function addGoal(goal) {
    setData((d) => ({ ...d, goals: [...d.goals, goal] }))
  }
  function deleteGoal(id) {
    setData((d) => ({ ...d, goals: d.goals.filter((g) => g.id !== id) }))
  }
  function addFundsToGoal(id, amount) {
    setData((d) => ({ ...d, goals: d.goals.map((g) => (g.id === id ? { ...g, saved: g.saved + amount } : g)) }))
  }
  function addAccount(account) {
    setData((d) => ({ ...d, accounts: [...d.accounts, account] }))
  }
  function deleteAccount(id) {
    setData((d) => ({
      ...d,
      accounts: d.accounts.filter((a) => a.id !== id),
      transactions: d.transactions.filter((t) => t.accountId !== id),
    }))
  }
  function resetAll() {
    setData(resetFinoraData())
    setTab('overview')
  }

  return (
    <div className="demo-theme--finora dt-shell fin-shell">
      <div className="fin-topbar">
        <div className="fin-brand"><IconWallet /> Finora</div>

        <div className="fin-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={tab === id ? 'is-active' : ''}
              onClick={() => setTab(id)}
            >
              <Icon /> {label}
            </button>
          ))}
        </div>

        <div className="fin-actions">
          <button type="button" className="dt-icon-btn" aria-label="Reset demo data" title="Reset demo data" onClick={resetAll}>
            <IconRefreshCw />
          </button>
          <IconBell />
          <img className="dt-avatar" src="https://i.pravatar.cc/64?u=finora-demo-user" alt="Demo user" width="32" height="32" />
        </div>
      </div>

      <div className="fin-body">
        {tab === 'overview' && <Overview accounts={accounts} transactions={transactions} />}
        {tab === 'transactions' && (
          <Transactions transactions={transactions} accounts={accounts} onAdd={addTransaction} onDelete={deleteTransaction} />
        )}
        {tab === 'budgets' && <Budgets transactions={transactions} budgets={budgets} onUpdateLimit={updateBudgetLimit} />}
        {tab === 'goals' && <Goals goals={goals} onAddGoal={addGoal} onDeleteGoal={deleteGoal} onAddFunds={addFundsToGoal} />}
        {tab === 'accounts' && (
          <Accounts accounts={accounts} transactions={transactions} onAddAccount={addAccount} onDeleteAccount={deleteAccount} />
        )}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          Demo data only, stored in this browser — nothing here is a real account. Use the refresh icon above to reset it.
        </p>
      </div>
    </div>
  )
}
