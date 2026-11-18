import type { ProfessionalExperience } from '../types'
import { ExperienceDetails } from './ExperienceDetails'

export function CareerRole({ role }: { role: ProfessionalExperience }) {
  const visibleTechnologies = role.technologyHighlights ?? role.technologies

  return (
    <article
      className={`career-role${role.featured ? ' career-role-featured' : ''}`}
    >
      <h3>{role.role}</h3>
      {role.program && <p className="career-program">{role.program}</p>}
      <div className="career-role-meta">
        <p className="career-role-dates">{role.dates}</p>
        {role.location && <p>{role.location}</p>}
      </div>
      {role.titlePeriods && (
        <ul
          className="career-title-periods"
          aria-label="Official title periods"
        >
          {role.titlePeriods.map((period) => (
            <li key={period.role}>
              <span>{period.role}</span>
              <span>{period.dates}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="career-role-summary">{role.summary}</p>
      <ExperienceDetails role={role} />
      {role.note && <p className="career-role-note">{role.note}</p>}
      <div className="career-technologies">
        {role.primaryLanguage && (
          <p className="career-primary-language">
            Primary programming language <strong>{role.primaryLanguage}</strong>
          </p>
        )}
        {visibleTechnologies.length > 0 && (
          <>
            <h4>
              {role.primaryLanguage
                ? 'Supporting technologies & tools'
                : 'Technologies & tools'}
            </h4>
            <ul className="tags" aria-label="Technologies and tools">
              {visibleTechnologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  )
}
