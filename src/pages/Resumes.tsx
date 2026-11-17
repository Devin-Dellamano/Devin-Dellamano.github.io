import { PageIntro } from '../components/PageIntro'
import { resumes } from '../data/portfolio'

export function Resumes() {
  return (
    <div className="container page">
      <PageIntro label="Career overview" title="Resumes">
        <p>
          Two perspectives on my software engineering and game development
          background.
        </p>
      </PageIntro>
      <div className="resume-grid">
        {resumes.map((resume) => (
          <section className="resume-card" key={resume.title}>
            <span className="document-symbol" aria-hidden="true">
              ▤
            </span>
            <h2>{resume.title}</h2>
            <p>{resume.description}</p>
            {resume.pdf ? (
              <div className="actions">
                <a
                  className="button"
                  href={resume.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF ↗
                </a>
                <a className="button secondary" href={resume.pdf} download>
                  Download PDF
                </a>
              </div>
            ) : (
              <p className="availability">PDF coming soon</p>
            )}
          </section>
        ))}
      </div>
      <p className="note">Resume PDFs will be added here when available.</p>
    </div>
  )
}
