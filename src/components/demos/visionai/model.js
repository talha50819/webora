// VisionAI's actual model layer — real TensorFlow.js + MobileNetV2 running
// entirely in the browser (WebGL/WASM/CPU, whichever TF.js picks), not a
// simulation. Both libraries are dynamically imported so they only ever
// download for someone who opens this demo and clicks "Load AI model" —
// nobody else on the site pays a single byte for them (same lazy-loading
// principle the LiveTV page uses for hls.js). MobileNet's weights (~13MB)
// stream from Google's public model CDN on first load and are then cached
// by the browser's normal HTTP cache for the rest of the session.

let cachedModel = null

export async function loadModel(onStatus) {
  if (cachedModel) return cachedModel
  onStatus?.('Loading TensorFlow.js…')
  await import('@tensorflow/tfjs')
  onStatus?.('Downloading MobileNet weights…')
  const mobilenet = await import('@tensorflow-models/mobilenet')
  const model = await mobilenet.load({ version: 2, alpha: 1.0 })
  cachedModel = model
  return model
}

export async function classifyImage(model, imgEl, topK = 5) {
  const t0 = performance.now()
  const predictions = await model.classify(imgEl, topK)
  return { predictions, ms: performance.now() - t0 }
}

/** The real 1000 ImageNet class labels this model was trained on. */
export async function loadImagenetClasses() {
  const mod = await import('@tensorflow-models/mobilenet/dist/imagenet_classes.js')
  const raw = mod.IMAGENET_CLASSES || mod.default?.IMAGENET_CLASSES || {}
  return Object.entries(raw).map(([id, label]) => ({ id: Number(id), label }))
}
