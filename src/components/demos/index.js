import FinoraDemo from './finora/FinoraDemo.jsx'
import HabitFlowDemo from './habitflow/HabitFlowDemo.jsx'
import DeployFlowDemo from './deployflow/DeployFlowDemo.jsx'
import CipherBoxDemo from './cipherbox/CipherBoxDemo.jsx'
import VisionAIDemo from './visionai/VisionAIDemo.jsx'

// Keyed by service slug (src/data/services.js) — every slug with an entry
// here gets a real interactive demo on its /work/:slug page instead of the
// "coming soon" placeholder. See src/data/work-demos.js for the metadata
// (title/tagline/label/frame) shown alongside it.
//
// VisionAI is the one exception to "eagerly import the demo component":
// its actual model (@tensorflow/tfjs + @tensorflow-models/mobilenet, ~1MB+
// the model weights) is dynamically imported inside src/components/demos/
// visionai/model.js, not here — so it only ever downloads for someone who
// opens that demo and clicks "Load AI model", same lazy-loading principle
// LiveTV uses for hls.js.
export const demoComponents = {
  'web-development': FinoraDemo,
  'mobile-app-development': HabitFlowDemo,
  'cloud-devops': DeployFlowDemo,
  cybersecurity: CipherBoxDemo,
  'ai-machine-learning': VisionAIDemo,
}
