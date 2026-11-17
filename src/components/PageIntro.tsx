import type { ReactNode } from 'react'

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {children && <div className="page-summary">{children}</div>}
    </div>
  )
}
