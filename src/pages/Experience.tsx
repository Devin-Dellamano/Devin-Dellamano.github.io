import { ButtonLink } from '../components/ButtonLink'
import { EmployerNavigation } from '../components/EmployerNavigation'
import { CareerTimeline } from '../components/CareerTimeline'
import { PageIntro } from '../components/PageIntro'
import { careerOverview, employers } from '../data/experience'
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
        {careerOverview.highlights.map((highlight) => (
          <div key={highlight.label}>
            <dt>{highlight.label}</dt>
            <dd>{highlight.value}</dd>
          </div>
        ))}
      </dl>
      <EmployerNavigation employers={employers} />
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
