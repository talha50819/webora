import { useEffect, useRef, useState } from 'react'

const INITIAL_DRIVERS = [
  { id: 'd1', name: 'R. Alvarez', avatar: 'fleetline-driver-1', status: 'idle', delivery: null, progress: 0 },
  { id: 'd2', name: 'K. Nomvete', avatar: 'fleetline-driver-2', status: 'idle', delivery: null, progress: 0 },
  { id: 'd3', name: 'T. Osei', avatar: 'fleetline-driver-3', status: 'idle', delivery: null, progress: 0 },
]

const INITIAL_ORDERS = [
  { id: '#4471', dest: '118 Birch St', status: 'pending', driverId: null },
  { id: '#4472', dest: '42 Harbor Ave', status: 'pending', driverId: null },
  { id: '#4473', dest: '9 Foundry Rd', status: 'pending', driverId: null },
]

const STATUS_LABEL = { idle: 'Idle', enroute: 'En route', delivered: 'Delivered' }
const DOT_COLOR = { idle: 'var(--dt-fg-soft)', enroute: 'var(--dt-accent)', delivered: '#4ade80' }

export default function DispatchDemo() {
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS)
  const [orders, setOrders] = useState(INITIAL_ORDERS)
  const [assign, setAssign] = useState({})
  const intervalsRef = useRef(new Map())

  useEffect(() => {
    const intervals = intervalsRef.current
    return () => intervals.forEach((id) => clearInterval(id))
  }, [])

  function dispatch(orderId) {
    const driverId = assign[orderId]
    if (!driverId) return

    setOrders((os) => os.map((o) => (o.id === orderId ? { ...o, status: 'enroute', driverId } : o)))
    setDrivers((ds) => ds.map((d) => (d.id === driverId ? { ...d, status: 'enroute', delivery: orderId, progress: 0 } : d)))

    const interval = setInterval(() => {
      setDrivers((ds) => ds.map((d) => (d.id === driverId ? { ...d, progress: Math.min(100, d.progress + 20) } : d)))
    }, 500)
    intervalsRef.current.set(driverId, interval)

    setTimeout(() => {
      clearInterval(intervalsRef.current.get(driverId))
      setDrivers((ds) => ds.map((d) => (d.id === driverId ? { ...d, status: 'delivered', progress: 100 } : d)))
      setOrders((os) => os.map((o) => (o.id === orderId ? { ...o, status: 'delivered' } : o)))
    }, 2600)
  }

  const idleDrivers = drivers.filter((d) => d.status === 'idle')

  return (
    <div className="demo-theme--dispatch dt-shell">
      <div className="dt-eyebrow">Fleetline — live board</div>

      <div className="dt-grid-3" style={{ marginBottom: '1.5rem' }}>
        {drivers.map((d) => (
          <div className="dt-card" key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={`https://i.pravatar.cc/80?u=${d.avatar}`}
              alt={d.name}
              width="44"
              height="44"
              style={{ borderRadius: '50%', flexShrink: 0, border: '2px solid var(--dt-accent)' }}
            />
            <div>
              <div style={{ fontWeight: 700 }}>
                <span className="dt-dot" style={{ background: DOT_COLOR[d.status] }} />
                {d.name}
              </div>
              <div className="dt-stat-label" style={{ marginTop: '0.3rem' }}>
                {STATUS_LABEL[d.status]}{d.delivery ? ` · ${d.delivery}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dt-eyebrow">Deliveries</div>
      {orders.map((o) => (
        <div className="dt-card" key={o.id} style={{ marginBottom: '0.6rem' }}>
          <div className="dt-assign-row">
            <span>{o.id} → {o.dest}</span>
            {o.status === 'pending' && (
              <div className="dt-assign-row__controls">
                <select
                  className="dt-select"
                  value={assign[o.id] || ''}
                  onChange={(e) => setAssign((a) => ({ ...a, [o.id]: e.target.value }))}
                >
                  <option value="">Assign driver…</option>
                  {idleDrivers.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
                <button type="button" className="dt-btn" style={{ fontSize: '0.75rem', padding: '0.6rem 1rem', whiteSpace: 'nowrap' }} disabled={!assign[o.id]} onClick={() => dispatch(o.id)}>
                  Dispatch
                </button>
              </div>
            )}
            {o.status === 'enroute' && <span className="dt-badge" style={{ background: 'var(--dt-tag-bg)', color: 'var(--dt-accent)' }}>En route</span>}
            {o.status === 'delivered' && <span className="dt-badge" style={{ background: '#173324', color: '#4ade80' }}>Delivered</span>}
          </div>
          {o.status === 'enroute' && (
            <div className="dt-bar-track" style={{ height: '0.4rem', marginTop: '0.7rem' }}>
              <div className="dt-bar-fill" style={{ width: `${drivers.find((d) => d.id === o.driverId)?.progress || 0}%` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
