import { ButtonLink } from '../components/ButtonLink'
import { PageIntro } from '../components/PageIntro'
import { ResumeCard } from '../components/ResumeCard'
import { resumes } from '../data/portfolio'
import '../styles/resumes.css'

export function Resumes() {
  return (
    <div className="container page resumes-page">
      <PageIntro label="Professional documents" title="Resumes">
        <p>
          Explore my professional background through two tailored resumes
          highlighting my software engineering and game development experience.
        </p>
      </PageIntro>
      <div className="resume-grid">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
      <section className="resumes-conclusion">
        <h2>Interested in learning more?</h2>
        <p>
          Explore my professional experience, development projects, or contact
          me directly about potential opportunities.
        </p>
        <div className="actions">
          <ButtonLink to="/experience">View Experience</ButtonLink>
          <ButtonLink to="/projects" secondary>
            Explore Projects
          </ButtonLink>
          <ButtonLink to="/contact" secondary>
            Contact
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
