import { ButtonLink } from '../components/ButtonLink'
import { ContactCard } from '../components/ContactCard'
import { ContactIcon } from '../components/ContactIcon'
import { PageIntro } from '../components/PageIntro'
import { contact } from '../data/portfolio'
import { useClipboard } from '../hooks/useClipboard'
import '../styles/contact.css'

export function Contact() {
  const { status, copy } = useClipboard(contact.email)
  const feedback =
    status === 'copied'
      ? 'Email address copied.'
      : status === 'error'
        ? 'Unable to copy. Select and copy the email address above.'
        : ''

  return (
    <div className="container page contact-page">
      <PageIntro label="Let's connect" title="Contact">
        <p>
          Interested in discussing software engineering opportunities, game
          development, or potential collaborations? I'd be happy to connect.
        </p>
      </PageIntro>
      <div className="contact-grid">
        <ContactCard
          icon="mail"
          title="Email"
          description="For professional inquiries, career opportunities, and potential collaborations."
          feedback={feedback}
          actions={
            <>
              <a className="button" href={`mailto:${contact.email}`}>
                Send Email <ContactIcon icon="mail" size={16} />
              </a>
              <button
                className="button secondary"
                type="button"
                onClick={copy}
                disabled={status === 'copying'}
                aria-busy={status === 'copying'}
              >
                {status === 'copied'
                  ? 'Copied!'
                  : status === 'copying'
                    ? 'Copying...'
                    : 'Copy Email'}
                <ContactIcon icon="copy" size={16} />
              </button>
            </>
          }
        >
          <p className="contact-email">{contact.email}</p>
        </ContactCard>
        <ContactCard
          icon="linkedin"
          title="LinkedIn"
          description="Connect with me professionally and learn more about my career and experience."
          actions={
            <a
              className="button"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile (opens in a new tab)"
            >
              View LinkedIn Profile <ContactIcon icon="external" size={16} />
            </a>
          }
        />
      </div>
      <div className="contact-location">
        <ContactIcon icon="location" size={24} />
        <div>
          <p>{contact.location.primary}</p>
          <p>{contact.location.secondary}</p>
        </div>
      </div>
      <section className="contact-interests">
        <h2>Professional interests</h2>
        <ul className="tags">
          {contact.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
      <section className="contact-conclusion">
        <h2>Explore my qualifications</h2>
        <p>
          Learn more about my professional background, technical experience, and
          development projects.
        </p>
        <div className="actions">
          <ButtonLink to="/resumes">View Resumes</ButtonLink>
          <ButtonLink to="/experience" secondary>
            View Experience
          </ButtonLink>
          <ButtonLink to="/projects" secondary>
            Explore Projects
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
