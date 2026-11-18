import type { ReactNode } from 'react'
import { ContactIcon } from './ContactIcon'

interface ContactCardProps {
  icon: 'mail' | 'linkedin'
  title: string
  description: string
  children?: ReactNode
  actions: ReactNode
  feedback?: string
}

export function ContactCard({
  icon,
  title,
  description,
  children,
  actions,
  feedback,
}: ContactCardProps) {
  return (
    <section className="contact-card">
      <div className="contact-card-icon">
        <ContactIcon icon={icon} size={32} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
      <div className="contact-card-footer">
        <div className="actions contact-actions">{actions}</div>
        <p
          className="contact-feedback"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {feedback}
        </p>
      </div>
    </section>
  )
}
