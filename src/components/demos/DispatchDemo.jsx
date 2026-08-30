import { useEffect, useRef, useState } from 'react'

const INITIAL_DRIVERS = [
  { id: 'd1', name: 'R. Alvarez', status: 'idle', delivery: null, progress: 0 },
  { id: 'd2', name: 'K. Nomvete', status: 'idle', delivery: null, progress: 0 },
  { id: 'd3', name: 'T. Osei', status: 'idle', delivery: null, progress: 0 },
]

const INITIAL_ORDERS = [
  { id: '#4471', dest: '118 Birch St', status: 'pending', driverId: null },
  { id: '#4472', dest: '42 Harbor Ave', status: 'pending', driverId: null },
  { id: '#4473', dest: '9 Foundry Rd', status: 'pending', driverId: null },
]

const STATUS_LABEL = { idle: 'Idle', enroute: 'En route', delivered: 'Delivered' }

export default function DispatchDemo() {
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS)
  const [orders, setOrders] = useState(INITIAL_ORDERS)
  const [assign, setAssign] = useState({}) // orderId -> driverId picked in the dropdown
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
      setDrivers((ds) =>
        ds.map((d) => {
          if (d.id !== driverId) return d
          const next = Math.min(100, d.progress + 20)
          return { ...d, progress: next }
        }),
      )
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
    <div>
      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Drivers</div>
      <div className="demo-list" style={{ marginBottom: 'var(--space-3)' }}>
        {drivers.map((d) => (
          <div className="demo-list-row" key={d.id}>
            <span>
              <span className={`demo-driver-dot demo-driver-dot--${d.status === 'enroute' ? 'enroute' : d.status === 'delivered' ? 'delivered' : 'idle'}`} />
              {d.name}
            </span>
            <span className="type-mono" style={{ fontSize: '0.78rem' }}>
              {STATUS_LABEL[d.status]}{d.delivery ? ` — ${d.delivery}` : ''}
            </span>
          </div>
        ))}
      </div>

      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Deliveries (try it)</div>
      <div className="demo-list">
        {orders.map((o) => (
          <div className="demo-list-row" key={o.id} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
            <div className="demo-list-row" style={{ border: 'none', padding: 0 }}>
              <span className="type-mono">{o.id} → {o.dest}</span>
              {o.status === 'pending' && (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <select
                    value={assign[o.id] || ''}
                    onChange={(e) => setAssign((a) => ({ ...a, [o.id]: e.target.value }))}
                    style={{ border: 'var(--border)', padding: '0.4rem 0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', background: 'transparent' }}
                  >
                    <option value="">Assign driver…</option>
                    {idleDrivers.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="btn btn--solid"
                    style={{ fontSize: '0.72rem', padding: '0.5rem 0.9rem' }}
                    disabled={!assign[o.id]}
                    onClick={() => dispatch(o.id)}
                  >
                    Dispatch
                  </button>
                </div>
              )}
              {o.status === 'enroute' && <span className="demo-badge demo-badge--medium">En route</span>}
              {o.status === 'delivered' && <span className="demo-badge demo-badge--fixed">Delivered</span>}
            </div>
            {o.status === 'enroute' && (
              <div className="demo-progress-track">
                <div
                  className="demo-progress-fill"
                  style={{ width: `${drivers.find((d) => d.id === o.driverId)?.progress || 0}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
