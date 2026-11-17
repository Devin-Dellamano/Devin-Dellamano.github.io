import type { ReactNode } from 'react'

export function SectionHeading({
  label,
  title,
  children,
}: {
  label?: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="section-heading">
      {label && <p className="eyebrow">{label}</p>}
      <h2>{title}</h2>
      {children}
    </div>
  )
}
