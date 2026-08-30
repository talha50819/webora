import { useState } from 'react'

const PRODUCTS = [
  { id: 'tote', name: 'Canvas Tote', price: 38, swatch: 'TOTE' },
  { id: 'shirt', name: 'Linen Shirt', price: 64, swatch: 'SHIRT' },
  { id: 'mug', name: 'Ceramic Mug', price: 22, swatch: 'MUG' },
  { id: 'scarf', name: 'Wool Scarf', price: 48, swatch: 'SCARF' },
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
    <div>
      <div className="demo-stats">
        <div>
          <div className="demo-stat__value">1.5s</div>
          <div className="demo-stat__label">Page load, after</div>
        </div>
        <div>
          <div className="demo-stat__value">−75%</div>
          <div className="demo-stat__label">Load time cut</div>
        </div>
      </div>

      <div className="demo-bar-row">
        <span className="demo-bar-row__label">Before</span>
        <div className="demo-bar-track">
          <div className="demo-bar-fill" style={{ width: '100%' }} />
        </div>
        <span className="demo-bar-row__value">6.0s</span>
      </div>
      <div className="demo-bar-row" style={{ marginBottom: 'var(--space-3)' }}>
        <span className="demo-bar-row__label">After</span>
        <div className="demo-bar-track">
          <div className="demo-bar-fill demo-bar-fill--lime" style={{ width: '25%' }} />
        </div>
        <span className="demo-bar-row__value">1.5s</span>
      </div>

      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Storefront (try it)</div>
      <div className="demo-shop-grid">
        {PRODUCTS.map((p) => (
          <div className="demo-shop-item" key={p.id}>
            <div className="demo-shop-item__swatch">{p.swatch}</div>
            <div className="demo-shop-item__name">{p.name}</div>
            <div className="demo-shop-item__price">${p.price}</div>
            <button type="button" className="btn btn--ghost" style={{ fontSize: '0.72rem', padding: '0.55rem 0.8rem' }} onClick={() => addToCart(p.id)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="demo-cart">
        {items.length === 0 ? (
          <p className="type-mono" style={{ color: 'var(--ink-soft)' }}>Cart is empty — add something above.</p>
        ) : checkedOut ? (
          <p className="type-mono">✓ Order placed — {count} item{count > 1 ? 's' : ''}, ${total}. (Demo only, nothing was charged.)</p>
        ) : (
          <>
            {items.map(([id, qty]) => {
              const p = PRODUCTS.find((x) => x.id === id)
              return (
                <div className="demo-cart__row" key={id}>
                  <span>{p.name} × {qty}</span>
                  <span>${p.price * qty}</span>
                </div>
              )
            })}
            <div className="demo-cart__total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button type="button" className="btn btn--accent" style={{ marginTop: '0.9rem' }} onClick={() => setCheckedOut(true)}>
              Checkout →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
