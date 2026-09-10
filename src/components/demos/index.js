import FinoraDemo from './finora/FinoraDemo.jsx'
import HabitFlowDemo from './habitflow/HabitFlowDemo.jsx'
import DeployFlowDemo from './deployflow/DeployFlowDemo.jsx'
import CipherBoxDemo from './cipherbox/CipherBoxDemo.jsx'

// Keyed by service slug (src/data/services.js) — every slug with an entry
// here gets a real interactive demo on its /work/:slug page instead of the
// "coming soon" placeholder. See src/data/work-demos.js for the metadata
// (title/tagline/label/frame) shown alongside it.
export const demoComponents = {
  'web-development': FinoraDemo,
  'mobile-app-development': HabitFlowDemo,
  'cloud-devops': DeployFlowDemo,
  cybersecurity: CipherBoxDemo,
}
