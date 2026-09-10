import { useEffect, useRef, useState } from 'react'
import { IconAlertTriangle, IconCpu, IconUpload } from './icons.jsx'
import { SAMPLE_IMAGES } from './samples.js'
import { classifyImage } from './model.js'

function makeThumbnail(imgEl, size = 72) {
  try {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const scale = Math.max(size / imgEl.naturalWidth, size / imgEl.naturalHeight)
    const w = imgEl.naturalWidth * scale
    const h = imgEl.naturalHeight * scale
    ctx.drawImage(imgEl, (size - w) / 2, (size - h) / 2, w, h)
    return canvas.toDataURL('image/jpeg', 0.7)
  } catch {
    return null
  }
}

export default function Classify({ modelStatus, statusMessage, model, onLoadModel, onClassified }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [predictions, setPredictions] = useState(null)
  const [inferenceMs, setInferenceMs] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const imgRef = useRef(null)
  const fileInputRef = useRef(null)

  // Revoke the previous blob: URL (from a user upload) whenever it's
  // replaced or the component unmounts, so we don't leak memory.
  useEffect(() => {
    return () => {
      if (imageSrc?.startsWith('blob:')) URL.revokeObjectURL(imageSrc)
    }
  }, [imageSrc])

  async function runClassification() {
    if (!model || !imgRef.current) return
    setBusy(true)
    setError('')
    try {
      const { predictions: preds, ms } = await classifyImage(model, imgRef.current, 5)
      setPredictions(preds)
      setInferenceMs(ms)
      onClassified({
        id: `${Date.now()}`,
        thumbnail: makeThumbnail(imgRef.current),
        topLabel: preds[0]?.className || 'Unknown',
        confidence: preds[0]?.probability || 0,
        ms,
        timestamp: new Date().toISOString(),
      })
    } catch (err) {
      setError(err.message || 'Classification failed.')
    } finally {
      setBusy(false)
    }
  }

  function setImage(src) {
    setPredictions(null)
    setError('')
    setImageSrc(src)
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith('image/')) return
    setImage(URL.createObjectURL(file))
  }

  function handleDrop(e) {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }

  function handleImageLoad() {
    if (modelStatus === 'ready') runClassification()
  }

  if (modelStatus !== 'ready') {
    return (
      <div className="dt-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'inline-flex', width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--dt-tag-bg)', color: 'var(--dt-accent)', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <IconCpu />
        </div>
        <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
          {modelStatus === 'loading' ? statusMessage : modelStatus === 'error' ? 'Model failed to load' : 'Load the AI model to get started'}
        </div>
        <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem', maxWidth: '32rem', margin: '0 auto 1.25rem' }}>
          {modelStatus === 'error'
            ? statusMessage || 'Something went wrong downloading the model. Check your connection and try again.'
            : 'MobileNetV2, ~13MB, downloaded once from Google’s public model CDN and cached by your browser after that. Runs entirely on your device — no images are ever uploaded anywhere.'}
        </p>
        <button type="button" className="dt-btn" onClick={onLoadModel} disabled={modelStatus === 'loading'}>
          {modelStatus === 'loading' ? statusMessage : modelStatus === 'error' ? 'Retry' : 'Load AI model'}
        </button>
      </div>
    )
  }

  return (
    <>
      <div
        className="dt-card"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{ marginBottom: '1rem', textAlign: 'center', cursor: 'pointer', borderStyle: 'dashed' }}
        onClick={() => fileInputRef.current?.click()}
      >
        <IconUpload />
        <p style={{ marginTop: '0.6rem', fontWeight: 600, fontSize: '0.88rem' }}>Drop an image here, or click to upload</p>
        <p className="dt-stat-label" style={{ marginTop: '0.3rem' }}>Or try a sample below — nothing you use here is ever sent anywhere</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      <div className="dt-chip-row">
        {SAMPLE_IMAGES.map((s) => (
          <button key={s.id} type="button" className="dt-chip" onClick={() => setImage(s.src)}>
            {s.label}
          </button>
        ))}
      </div>

      {imageSrc && (
        <div className="dt-grid-2" style={{ alignItems: 'start' }}>
          <div className="dt-card">
            <img
              ref={imgRef}
              src={imageSrc}
              alt="To classify"
              crossOrigin="anonymous"
              onLoad={handleImageLoad}
              style={{ width: '100%', borderRadius: 'var(--dt-radius-sm)', display: 'block' }}
            />
            <button type="button" className="dt-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.9rem' }} onClick={runClassification} disabled={busy}>
              {busy ? 'Classifying…' : 'Classify again'}
            </button>
          </div>

          <div className="dt-card">
            <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Predictions</div>
            {error && (
              <div className="cb-alert" style={{ marginBottom: 0 }}>
                <IconAlertTriangle /> {error}
              </div>
            )}
            {!error && !predictions && <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>Analyzing image…</p>}
            {predictions?.map((p, i) => (
              <div key={p.className} style={{ marginBottom: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: i === 0 ? 700 : 500 }}>{p.className.split(',')[0]}</span>
                  <span style={{ fontWeight: 700, color: i === 0 ? 'var(--dt-accent)' : 'var(--dt-fg-soft)' }}>{(p.probability * 100).toFixed(1)}%</span>
                </div>
                <div className="dt-bar-track">
                  <div className="dt-bar-fill" style={{ width: `${p.probability * 100}%` }} />
                </div>
              </div>
            ))}
            {inferenceMs != null && (
              <p className="dt-stat-label" style={{ marginTop: '1rem' }}>Inference took {inferenceMs.toFixed(0)}ms, on-device.</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
