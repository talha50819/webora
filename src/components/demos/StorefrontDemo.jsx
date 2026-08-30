import { useState } from 'react'
import { IconSearch, IconCart, IconStar } from './icons.jsx'

const PRODUCTS = [
  { id: 'tote', name: 'Canvas Tote', price: 38, rating: 5, reviews: 128, img: 'aurelie-tote-v3' },
  { id: 'shirt', name: 'Linen Shirt', price: 64, rating: 4, reviews: 76, img: 'aurelie-shirt-v3' },
  { id: 'mug', name: 'Ceramic Mug', price: 22, rating: 5, reviews: 214, img: 'aurelie-mug-v3' },
  { id: 'scarf', name: 'Wool Scarf', price: 48, rating: 4, reviews: 54, img: 'aurelie-scarf-v3' },
]

function Stars({ rating }) {
  return (
    <span className="dt-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar key={i} filled={i < rating} />
      ))}
    </span>
  )
}

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

  function removeOne(id) {
    setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] || 0) - 1) }))
  }

  return (
    <div className="demo-theme--storefront dt-shell">
      <nav className="dt-topnav">
        <div className="dt-topnav__brand">Aurelie</div>
        <ul className="dt-topnav__links">
          <li>Shop</li>
          <li>Journal</li>
          <li>About</li>
        </ul>
        <div className="dt-topnav__actions">
          <button type="button" className="dt-icon-btn" aria-label="Search"><IconSearch /></button>
          <button type="button" className="dt-icon-btn" aria-label="Cart">
            <IconCart />
            {count > 0 && <span className="dt-icon-btn__badge">{count}</span>}
          </button>
        </div>
      </nav>

      <div className="dt-hero">
        <img src="https://picsum.photos/seed/aurelie-hero-v2/1200/500" alt="Aurelie fall collection" />
        <div className="dt-hero__content">
          <div className="dt-hero__eyebrow">Rebuilt storefront · 1.5s load</div>
          <div className="dt-hero__title">New arrivals, made to last a decade.</div>
          <div className="dt-hero__sub">Page loads dropped from 6.0s to 1.5s after the headless rebuild — 75% faster, and it shows in conversion.</div>
        </div>
      </div>

      <div className="dt-shop-layout">
        <div>
          <div className="dt-eyebrow">Shop the collection</div>
          <div className="dt-grid-2">
            {PRODUCTS.map((p) => (
              <div className="dt-card dt-product" key={p.id}>
                <div className="dt-product__img-wrap">
                  <img src={`https://picsum.photos/seed/${p.img}/500/500`} alt={p.name} loading="lazy" />
                </div>
                <div className="dt-heading" style={{ fontSize: '0.95rem', marginBottom: 0 }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Stars rating={p.rating} />
                  <span className="dt-stat-label" style={{ marginBottom: 0 }}>({p.reviews})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                  <span style={{ fontWeight: 700 }}>${p.price}</span>
                  <button type="button" className="dt-btn dt-btn--ghost" style={{ fontSize: '0.72rem', padding: '0.5rem 0.9rem' }} onClick={() => addToCart(p.id)}>
                    Add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dt-shop-layout__cart">
          <div className="dt-card">
            <div className="dt-heading" style={{ fontSize: '0.95rem' }}>Your bag</div>
            {items.length === 0 ? (
              <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>Empty — add something from the collection.</p>
            ) : checkedOut ? (
              <p style={{ fontSize: '0.88rem' }}>✓ Order placed — {count} item{count > 1 ? 's' : ''}, ${total}. (Demo only, nothing was charged.)</p>
            ) : (
              <>
                {items.map(([id, qty]) => {
                  const p = PRODUCTS.find((x) => x.id === id)
                  return (
                    <div className="dt-row" key={id} style={{ alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem' }}>{p.name}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button type="button" className="dt-icon-btn" style={{ fontSize: '0.9rem' }} onClick={() => removeOne(id)} aria-label={`Remove one ${p.name}`}>−</button>
                        <span style={{ fontSize: '0.82rem', minWidth: '1.2rem', textAlign: 'center' }}>{qty}</span>
                        <button type="button" className="dt-icon-btn" style={{ fontSize: '0.9rem' }} onClick={() => addToCart(id)} aria-label={`Add one ${p.name}`}>+</button>
                      </span>
                    </div>
                  )
                })}
                <div className="dt-row" style={{ borderBottom: 'none', fontWeight: 700, paddingBottom: 0 }}>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button type="button" className="dt-btn" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }} onClick={() => setCheckedOut(true)}>
                  Checkout →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
