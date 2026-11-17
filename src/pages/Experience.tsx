import { ExperienceEntry } from '../components/ExperienceEntry'
import { PageIntro } from '../components/PageIntro'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <div className="container page">
      <PageIntro label="Professional background" title="Experience">
        <p>
          8+ years across software engineering, flight simulation, enterprise
          development, and production support.
        </p>
      </PageIntro>
      <p className="section-intro">
        My engineering background includes C++ and C# development,
        cross-platform software, performance optimization, debugging, CI/CD, and
        technical leadership through collaboration.
      </p>
      <div className="timeline">
        {experience.map((entry) => (
          <ExperienceEntry key={entry.company + entry.role} entry={entry} />
        ))}
      </div>
    </div>
  )
}
