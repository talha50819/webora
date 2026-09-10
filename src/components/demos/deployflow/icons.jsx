// Small hand-authored line-icon set for the DeployFlow demo. Inherits
// color via currentColor so it themes with .demo-theme--deployflow.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconActivity(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M2.5 13h4l2.3-7 4.4 15 2.5-8H21.5" />
    </svg>
  )
}

export function IconLayers(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 2.5l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 18l9 5 9-5" />
    </svg>
  )
}

export function IconServer(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="3" y="3.5" width="18" height="6.5" rx="1.6" />
      <rect x="3" y="14" width="18" height="6.5" rx="1.6" />
      <path d="M7 6.75h.01M7 17.25h.01" />
    </svg>
  )
}

export function IconTerminal(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M6.5 9l3.5 3-3.5 3M12.5 15h5" />
    </svg>
  )
}

export function IconPlay(props) {
  return (
    <svg {...base} width="14" height="14" fill="currentColor" stroke="none" {...props}>
      <path d="M6 4.5v15l13-7.5z" />
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

export function IconX(props) {
  return (
    <svg {...base} width="13" height="13" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconRotateCcw(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <path d="M4 13a8 8 0 1 0 2.3-5.6L4 9.7" />
      <path d="M4 4v5.7h5.7" />
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

export function IconGitBranch(props) {
  return (
    <svg {...base} width="13" height="13" {...props}>
      <circle cx="6" cy="5" r="2.3" />
      <circle cx="6" cy="19" r="2.3" />
      <circle cx="18" cy="12" r="2.3" />
      <path d="M6 7.3V16.7M6 9a6 6 0 0 0 6 6h3.8" />
    </svg>
  )
}

export function IconExternalLink(props) {
  return (
    <svg {...base} width="13" height="13" {...props}>
      <path d="M9 5H5.5A1.5 1.5 0 0 0 4 6.5v12A1.5 1.5 0 0 0 5.5 20h12a1.5 1.5 0 0 0 1.5-1.5V15" />
      <path d="M13 3h8v8M21 3l-10 10" />
    </svg>
  )
}
