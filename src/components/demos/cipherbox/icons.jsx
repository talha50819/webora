// Small hand-authored line-icon set for the CipherBox demo. Inherits
// color via currentColor so it themes with .demo-theme--cipherbox.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconLock(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
      <path d="M12 14.5v2.8" />
    </svg>
  )
}

export function IconUnlock(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 8.4-2.2" />
      <path d="M12 14.5v2.8" />
    </svg>
  )
}

export function IconHash(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M5 8.5h14M5 15.5h14M9.5 3.5l-2 17M16.5 3.5l-2 17" />
    </svg>
  )
}

export function IconKey(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="M10.3 12.7L19 4M15.5 8.5l2.5 2.5M19 4l2 2" />
    </svg>
  )
}

export function IconCopy(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  )
}

export function IconEye(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconEyeOff(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a15.6 15.6 0 0 1-4.2 4.8M6.5 6.6C4 8.3 2 12 2 12s3.6 7 10 7c1.4 0 2.6-.3 3.7-.8" />
      <path d="M9.9 10.1a3 3 0 0 0 4.2 4.2" />
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

export function IconCheck(props) {
  return (
    <svg {...base} width="14" height="14" {...props}>
      <path d="M4 12l5.5 5.5L20 7" />
    </svg>
  )
}

export function IconShuffle(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
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

export function IconSparkles(props) {
  return (
    <svg {...base} width="15" height="15" fill="currentColor" stroke="none" {...props}>
      <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6z" />
      <path d="M19 15l.9 2.7L22.5 18l-2.6.9L19 21.5l-.9-2.6-2.6-.9 2.6-.9z" />
    </svg>
  )
}
