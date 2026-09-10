const FACTS = [
  ['Model', 'MobileNetV2 (alpha 1.0)'],
  ['Trained on', 'ImageNet — 1.4M images, 1,000 classes'],
  ['Runs on', 'Your device, via TensorFlow.js (WebGL/WASM/CPU)'],
  ['Data sent to a server', 'None — inference happens entirely in your browser'],
  ['Model size', '~13MB, downloaded once and cached by your browser'],
]

export default function About() {
  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Model card</div>
        {FACTS.map(([k, v]) => (
          <div key={k} className="dt-row">
            <span className="dt-stat-label" style={{ marginBottom: 0 }}>{k}</span>
            <span style={{ fontWeight: 600, fontSize: '0.85rem', textAlign: 'right' }}>{v}</span>
          </div>
        ))}
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '0.8rem' }}>What's actually happening here</div>
        <p style={{ fontSize: '0.85rem', color: 'var(--dt-fg-soft)', lineHeight: 1.7, marginBottom: '0.9rem' }}>
          This isn't a mockup — clicking "Load AI model" downloads a real, pretrained MobileNetV2
          convolutional neural network and runs it with TensorFlow.js, right in this tab. Every
          classification is genuine inference against actual model weights, not a lookup table or
          a canned response.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--dt-fg-soft)', lineHeight: 1.7 }}>
          That also means the trade-offs are real: a general-purpose 1,000-class model is a
          reasonable choice for a broad classifier, but a production system usually needs a model
          fine-tuned on the specific categories that actually matter to the product — the kind of
          scoping work that happens before training even starts.
        </p>
      </div>
    </>
  )
}
