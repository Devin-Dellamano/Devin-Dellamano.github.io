import { ButtonLink } from '../components/ButtonLink'
import { CareerTimeline } from '../components/CareerTimeline'
import { PageIntro } from '../components/PageIntro'
import { careerOverview, employers, experience } from '../data/portfolio'
import '../styles/experience.css'

export function Experience() {
  return (
    <div className="container page career-page">
      <PageIntro label="Professional background" title="Experience">
        {careerOverview.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PageIntro>
      <dl className="career-overview" aria-label="Career overview">
        <div>
          <dt>Years of professional experience</dt>
          <dd>{careerOverview.professionalExperience}</dd>
        </div>
        <div>
          <dt>Companies</dt>
          <dd>{employers.length}</dd>
        </div>
        <div>
          <dt>Professional roles</dt>
          <dd>{experience.length}</dd>
        </div>
      </dl>
      <CareerTimeline employers={employers} />
      <section className="career-conclusion">
        <div>
          <h2>{careerOverview.conclusion.title}</h2>
          <p>{careerOverview.conclusion.description}</p>
        </div>
        <div className="actions">
          <ButtonLink to="/resumes">View Resumes</ButtonLink>
          <ButtonLink to="/contact" secondary>
            Contact
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
