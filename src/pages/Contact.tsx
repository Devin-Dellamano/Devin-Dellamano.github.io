import { PageIntro } from '../components/PageIntro'
import { contact } from '../data/portfolio'

export function Contact() {
  return (
    <div className="container page">
      <PageIntro label="Get in touch" title="Let’s connect.">
        <p>
          Connect about software engineering, flight simulation, gameplay
          systems, and independent game development.
        </p>
      </PageIntro>
      <div className="contact-list">
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            <span>Professional email</span>
            <strong>{contact.email} ↗</strong>
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin}>
            <span>LinkedIn</span>
            <strong>View profile ↗</strong>
          </a>
        )}
        {contact.githubConfirmed && (
          <a href={contact.github}>
            <span>GitHub</span>
            <strong>devin-dellamano ↗</strong>
          </a>
        )}
      </div>
      {!contact.email && !contact.linkedin && !contact.githubConfirmed && (
        <p className="note">
          Professional contact links will be added after confirmation.
        </p>
      )}
    </div>
  )
}
