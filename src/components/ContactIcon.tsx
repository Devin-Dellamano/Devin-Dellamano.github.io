const iconPaths = {
  mail: 'M3 5h18v14H3Z m0 0 9 7 9-7',
  linkedin: 'M3 3h18v18H3Z M7 10v7 M7 7h.01 M11 17v-7 M11 13a3 3 0 0 1 6 0v4',
  copy: 'M8 8h13v13H8Z M16 8V3H3v13h5',
  external: 'M14 3h7v7 M21 3 10 14 M10 3H3v18h18v-7',
  location:
    'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
}

export function ContactIcon({
  icon,
  size = 20,
}: {
  icon: keyof typeof iconPaths
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={iconPaths[icon]} />
    </svg>
  )
}
