import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function ButtonLink({
  to,
  children,
  secondary = false,
}: {
  to: string
  children: ReactNode
  secondary?: boolean
}) {
  return (
    <Link className={`button ${secondary ? 'secondary' : ''}`} to={to}>
      {children}
      <span aria-hidden="true"> ↗</span>
    </Link>
  )
}
