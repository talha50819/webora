// Small hand-authored line-icon set for the VisionAI demo. Inherits color
// via currentColor so it themes with .demo-theme--visionai.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconScan(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function IconTag(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M11.5 3.5H6a2.5 2.5 0 0 0-2.5 2.5v5.5a2 2 0 0 0 .6 1.4l9 9a2 2 0 0 0 2.8 0l6.1-6.1a2 2 0 0 0 0-2.8l-9-9a2 2 0 0 0-1.4-.6z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconInfo(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5h.01" />
    </svg>
  )
}

export function IconUpload(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M12 16V4M7.5 8.5L12 4l4.5 4.5" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
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

export function IconAlertTriangle(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 3.5L22 20H2z" />
      <path d="M12 9.5v5M12 17.2h.01" />
    </svg>
  )
}

export function IconCpu(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="3.2" y="10" width="2.2" height="4" rx="0.6" />
      <rect x="18.6" y="10" width="2.2" height="4" rx="0.6" />
      <rect x="10" y="3.2" width="4" height="2.2" rx="0.6" />
      <rect x="10" y="18.6" width="4" height="2.2" rx="0.6" />
    </svg>
  )
}
