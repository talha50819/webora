// Small hand-authored line-icon set for the Finora demo dashboard.
// Kept local (no icon-library dependency) — each icon inherits color via
// currentColor so it themes automatically with the demo's --dt-fg / --dt-accent
// tokens (see .demo-theme--finora in src/styles/index.css).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconGrid(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
    </svg>
  )
}

export function IconList(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  )
}

export function IconPieChart(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5H12z" />
      <path d="M15.5 2.9A9.53 9.53 0 0 1 21.1 8.5H12z" />
    </svg>
  )
}

export function IconTarget(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconWallet(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8H5.5A2.5 2.5 0 0 1 3 5.5" />
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <circle cx="16" cy="14" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M6 9.5a6 6 0 0 1 12 0c0 4.2 1.3 5.8 2 6.5H4c.7-.7 2-2.3 2-6.5z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconTrash(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V4.8c0-.4.4-.8.9-.8h4.2c.5 0 .9.4.9.8V7" />
      <path d="M6 7l.8 12.2c0 .9.8 1.6 1.7 1.6h6.9c.9 0 1.7-.7 1.7-1.6L18 7" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  )
}

export function IconArrowUpRight(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function IconArrowDownRight(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <path d="M7 7l10 10" />
      <path d="M17 8v9H8" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  )
}

export function IconRefreshCw(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.6" />
      <path d="M4 4v4.6h4.6" />
      <path d="M4 13a8 8 0 0 0 13.7 4.7l2.3-2.3" />
      <path d="M20 20v-4.6h-4.6" />
    </svg>
  )
}

export function IconX(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} width="13" height="13" {...props}>
      <path d="M4 12l5.5 5.5L20 7" />
    </svg>
  )
}
