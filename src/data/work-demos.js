// Metadata for /work/:slug pages that have a real interactive demo wired up
// (see src/components/demos/index.js for the components themselves). Kept
// separate from that module so pages that only need to know *which* slugs
// have a live demo — like the Work grid — don't have to import the demo
// components themselves.
export const workDemos = {
  'web-development': {
    theme: 'finora',
    projectTitle: 'Finora',
    tagline: 'A personal finance dashboard — accounts, budgets, transactions, and savings goals in one place.',
    demoLabel: 'finora.app/dashboard',
    highlights: ['Multi-account balances', 'Budgets that track spend', 'Savings goals', 'Spending insights'],
    note: 'Rebuilt as a standalone sandbox for this portfolio piece — not a real bank connection. Data is generated on load and stored only in your browser; reset it anytime from the dashboard.',
    // 'responsive' (default): shown in a resizable frame with a desktop/
    // tablet/mobile switcher, for a web app that scales across devices.
    frame: 'responsive',
  },
  'mobile-app-development': {
    theme: 'habitflow',
    projectTitle: 'HabitFlow',
    tagline: 'A habit & productivity app — daily habits, streaks, tasks, and progress in one pocket-sized tool.',
    demoLabel: 'HabitFlow',
    highlights: ['Daily habit tracking', 'Streaks that build', 'Simple task list', 'Progress heatmap'],
    note: 'Rebuilt as a standalone sandbox for this portfolio piece — not published to an app store. Data is generated on load and stored only in your browser; reset it anytime from inside the app.',
    // A genuine mobile app, shown fixed in a phone frame instead of the
    // resizable desktop/tablet/mobile switcher — it doesn't reflow to a
    // desktop layout any more than a real native app would.
    frame: 'phone',
  },
  'cloud-devops': {
    theme: 'deployflow',
    projectTitle: 'DeployFlow',
    tagline: 'A production-grade CI/CD platform — pipelines, deployments, environment health, and live logs.',
    demoLabel: 'deployflow.app/pipelines',
    highlights: ['One-click pipeline runs', 'Deployment history', 'Environment health', 'Live build logs'],
    note: 'Rebuilt as a standalone sandbox for this portfolio piece — "Run pipeline" is a timed simulation; nothing actually builds or deploys. Data is generated on load and stored only in your browser; reset it anytime from the dashboard.',
    frame: 'responsive',
  },
  cybersecurity: {
    theme: 'cipherbox',
    projectTitle: 'CipherBox',
    tagline: 'A client-side encryption & decryption tool — real AES-256-GCM, PBKDF2, and SHA-2, running entirely in your browser.',
    demoLabel: 'cipherbox.app',
    highlights: ['Real AES-256-GCM encryption', 'PBKDF2 key derivation', 'SHA-2 hashing', 'Secure password generator'],
    note: 'A genuinely working tool, not a mockup — it uses the browser’s native Web Crypto API. Nothing you type is ever sent anywhere or stored; every operation runs locally and is stateless by design.',
    frame: 'responsive',
  },
}

export function hasLiveDemo(slug) {
  return Boolean(workDemos[slug])
}
