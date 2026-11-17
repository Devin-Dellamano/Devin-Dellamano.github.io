import type { ProfessionalExperience } from '../types'

export function CareerRole({ role }: { role: ProfessionalExperience }) {
  return (
    <article className="career-role">
      <h3>{role.role}</h3>
      <p className="career-role-dates">{role.dates}</p>
      <p className="career-role-summary">{role.summary}</p>
      {role.contributions.length > 0 && (
        <ul
          className="career-contributions"
          aria-label="Technical contributions"
        >
          {role.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      )}
      {role.technologies.length > 0 && (
        <ul className="tags" aria-label="Technologies">
          {role.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
