import type { Resume } from '../types'

const iconPaths: Record<Resume['icon'], string> = {
  code: 'm8 6-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16',
  gamepad:
    'M7 7h10c2 0 3 2 3.5 4l1 6c.4 2-1.8 3-3 1.5L16 16H8l-2.5 2.5C4.3 20 2.1 19 2.5 17l1-6C4 9 5 7 7 7Z M7 10v4 M5 12h4 M16 11h.01 M18 13h.01',
}

export function ResumeCard({ resume }: { resume: Resume }) {
  const pdfUrl = `${import.meta.env.BASE_URL}resumes/${encodeURIComponent(resume.filename)}`
  const lastUpdated = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${resume.lastUpdated}-01T00:00:00Z`))

  return (
    <section className="resume-card" aria-labelledby={`${resume.id}-title`}>
      <svg
        className="resume-icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d={iconPaths[resume.icon]} />
      </svg>
      <h2 id={`${resume.id}-title`}>{resume.title}</h2>
      <p>{resume.description}</p>
      <ul className="resume-qualifications" aria-label="Core qualifications">
        {resume.qualifications.map((qualification) => (
          <li key={qualification}>{qualification}</li>
        ))}
      </ul>
      <div className="resume-document">
        <p className="resume-document-meta">
          {resume.format} · {resume.pageCount} pages
        </p>
        <p className="resume-updated">
          Updated <time dateTime={resume.lastUpdated}>{lastUpdated}</time>
        </p>
        <div className="actions resume-actions">
          <a
            className="button"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${resume.title} Resume (PDF, opens in a new tab)`}
          >
            View Resume
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14 3h7v7 M21 3 10 14 M10 3H3v18h18v-7" />
            </svg>
          </a>
          <a
            className="button secondary"
            href={pdfUrl}
            download={resume.filename}
            aria-label={`Download PDF of ${resume.title} Resume`}
          >
            Download PDF
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 3v12 m-5-5 5 5 5-5 M4 16v5h16v-5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
