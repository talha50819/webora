const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconPalette(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 2.5a9.5 9.5 0 1 0 0 19c1.4 0 2-1 2-2 0-.6-.3-1-.6-1.4-.3-.4-.4-.7-.2-1.1.2-.4.6-.6 1.1-.6H16a4 4 0 0 0 4-4c0-5.5-3.6-9.9-8-9.9z" />
      <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconType(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M5 6.5h14M12 6.5V18M9 18h6" />
    </svg>
  )
}

export function IconLayoutGrid(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
    </svg>
  )
}

export function IconEye(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
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

export function IconAlertTriangle(props) {
  return (
    <svg {...base} width="15" height="15" {...props}>
      <path d="M12 3.5L22 20H2z" />
      <path d="M12 9.5v5M12 17.2h.01" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg {...base} width="14" height="14" fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.8l2.86 5.8 6.4.93-4.63 4.5 1.1 6.37L12 17.3l-5.73 3.1 1.1-6.37-4.63-4.5 6.4-.93z" />
    </svg>
  )
}
