// Small hand-authored line-icon set for the portfolio demos.
// Kept local (no icon-library dependency) — each icon inherits color via currentColor
// so it themes automatically with each demo's --dt-fg / --dt-accent tokens.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconSearch(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  )
}

export function IconCart(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2.4l2.2 11.4a1.8 1.8 0 0 0 1.8 1.5h8.4a1.8 1.8 0 0 0 1.77-1.47L21 8H6.2" />
    </svg>
  )
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

export function IconTruck(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="1.5" y="6" width="12" height="9" rx="1" />
      <path d="M13.5 9.5H18l4 3.2V15h-8.5z" />
      <circle cx="6" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </svg>
  )
}

export function IconUsers(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <circle cx="8.5" cy="7.5" r="3" />
      <path d="M2.5 19.5a6 6 0 0 1 12 0" />
      <circle cx="17" cy="8.5" r="2.4" />
      <path d="M15.3 12.2A5 5 0 0 1 21.5 17" />
    </svg>
  )
}

export function IconChart(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M3 21V9" />
      <path d="M10.5 21V3" />
      <path d="M18 21v-7" />
      <path d="M2 21h20" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M12 2.5l7.5 3v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10v-6z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  )
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

export function IconStar({ filled = true, ...props }) {
  return (
    <svg {...base} width="14" height="14" fill={filled ? 'currentColor' : 'none'} {...props}>
      <path d="M12 2.8l2.86 5.8 6.4.93-4.63 4.5 1.1 6.37L12 17.3l-5.73 3.1 1.1-6.37-4.63-4.5 6.4-.93z" />
    </svg>
  )
}

export function IconChevronRight(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M9 5l7 7-7 7" />
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
