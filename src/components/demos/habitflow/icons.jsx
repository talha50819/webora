// Small hand-authored line-icon set for the HabitFlow demo — no icon
// library pulled in for a handful of shapes. Inherits color via
// currentColor so it themes with .demo-theme--habitflow.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconSun(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  )
}

export function IconRepeat(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M17 2.5l3 3-3 3" />
      <path d="M20 5.5H9a5.5 5.5 0 0 0-5.5 5.5" />
      <path d="M7 21.5l-3-3 3-3" />
      <path d="M4 18.5h11a5.5 5.5 0 0 0 5.5-5.5" />
    </svg>
  )
}

export function IconCheckSquare(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 12.2l2.6 2.6L16.5 9" />
    </svg>
  )
}

export function IconBarChart(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M4 20V11M11 20V4M18 20v-6" />
      <path d="M2.5 20h19" />
    </svg>
  )
}

export function IconFlame(props) {
  return (
    <svg {...base} width="14" height="14" fill="currentColor" stroke="none" {...props}>
      <path d="M12 2c.3 3-1.8 4.3-3 6-1.4 1.9-2 3.7-2 5.4A5 5 0 0 0 12 22a5 5 0 0 0 5-5.6c-.2 1-1 1.8-1.9 1.8-1.2 0-2-1-1.7-2.2.5-2 .1-3.5-1-5 1.8.3 3.1 1.6 3.6 3.4.7-1.6.9-3.5.3-5.4C15.7 6.3 14 4.3 12 2z" />
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
    </svg>
  )
}

export function IconCircle(props) {
  return (
    <svg {...base} width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function IconCheckCircle(props) {
  return (
    <svg {...base} width="22" height="22" fill="currentColor" stroke="none" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.6 2.6L16.3 9" stroke="var(--dt-bg)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
