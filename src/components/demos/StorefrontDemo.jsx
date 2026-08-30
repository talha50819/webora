import { useState } from 'react'

const PRODUCTS = [
  { id: 'tote', name: 'Canvas Tote', price: 38, img: 'aurelie-tote-v2' },
  { id: 'shirt', name: 'Linen Shirt', price: 64, img: 'aurelie-shirt-v2' },
  { id: 'mug', name: 'Ceramic Mug', price: 22, img: 'aurelie-mug-v2' },
  { id: 'scarf', name: 'Wool Scarf', price: 48, img: 'aurelie-scarf-v2' },
]

export default function StorefrontDemo() {
  const [cart, setCart] = useState({})
  const [checkedOut, setCheckedOut] = useState(false)

  const items = Object.entries(cart).filter(([, qty]) => qty > 0)
  const total = items.reduce((sum, [id, qty]) => sum + PRODUCTS.find((p) => p.id === id).price * qty, 0)
  const count = items.reduce((sum, [, qty]) => sum + qty, 0)

  function addToCart(id) {
    setCheckedOut(false)
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  }

  return (
    <div className="demo-theme--storefront dt-shell">
      <div className="dt-eyebrow">Aurelie — page load</div>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <div className="dt-stat-value">1.5s</div>
          <div className="dt-stat-label">After rebuild</div>
        </div>
        <div>
          <div className="dt-stat-value" style={{ color: 'var(--dt-accent)' }}>−75%</div>
          <div className="dt-stat-label">Faster than before</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
        <span className="dt-label" style={{ width: '3.5rem', margin: 0 }}>Before</span>
        <div className="dt-bar-track"><div className="dt-bar-fill" style={{ width: '100%', opacity: 0.4 }} /></div>
        <span className="dt-tag">6.0s</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
        <span className="dt-label" style={{ width: '3.5rem', margin: 0 }}>After</span>
        <div className="dt-bar-track"><div className="dt-bar-fill" style={{ width: '25%' }} /></div>
        <span className="dt-tag">1.5s</span>
      </div>

      <div className="dt-eyebrow">Shop the collection</div>
      <div className="dt-grid-4" style={{ marginBottom: '1.25rem' }}>
        {PRODUCTS.map((p) => (
          <div className="dt-card" key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <img
              src={`https://picsum.photos/seed/${p.img}/400/400`}
              alt={p.name}
              loading="lazy"
              style={{ aspectRatio: '1', width: '100%', objectFit: 'cover', borderRadius: 'var(--dt-radius-sm)' }}
            />
            <div className="dt-heading" style={{ fontSize: '0.95rem' }}>{p.name}</div>
            <div style={{ color: 'var(--dt-fg-soft)' }}>${p.price}</div>
            <button type="button" className="dt-btn dt-btn--ghost" style={{ justifyContent: 'center', fontSize: '0.75rem' }} onClick={() => addToCart(p.id)}>
              Add to bag
            </button>
          </div>
        ))}
      </div>

      <div className="dt-card">
        {items.length === 0 ? (
          <p style={{ color: 'var(--dt-fg-soft)' }}>Your bag is empty — add something above.</p>
        ) : checkedOut ? (
          <p>✓ Order placed — {count} item{count > 1 ? 's' : ''}, ${total}. (Demo only, nothing was charged.)</p>
        ) : (
          <>
            {items.map(([id, qty]) => {
              const p = PRODUCTS.find((x) => x.id === id)
              return (
                <div className="dt-row" key={id}>
                  <span>{p.name} × {qty}</span>
                  <span>${p.price * qty}</span>
                </div>
              )
            })}
            <div className="dt-row" style={{ borderBottom: 'none', fontWeight: 700, paddingBottom: 0 }}>
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button type="button" className="dt-btn" style={{ marginTop: '0.9rem' }} onClick={() => setCheckedOut(true)}>
              Checkout →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
