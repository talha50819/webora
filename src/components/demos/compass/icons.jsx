const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconClipboard(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="5" y="4" width="14" height="17" rx="1.6" />
      <rect x="8.5" y="2" width="7" height="3.4" rx="1" />
      <path d="M8.5 11h7M8.5 15h7M8.5 19h4" />
    </svg>
  )
}

export function IconRadar(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 3v9l6 3" />
    </svg>
  )
}

export function IconBarChart(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M4 20V11M11 20V4M18 20v-6" />
      <path d="M2.5 20h19" />
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

export function IconArrowRight(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
