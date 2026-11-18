import type { EmployerExperience } from '../types'
import { CareerRole } from './CareerRole'

export function CareerTimeline({
  employers,
}: {
  employers: EmployerExperience[]
}) {
  return (
    <ol className="career-timeline" aria-label="Professional career timeline">
      {employers.map((employer) => (
        <li
          className="career-employer"
          key={employer.id}
          id={employer.id}
          tabIndex={-1}
          aria-labelledby={`${employer.id}-heading`}
        >
          <div className="career-employer-heading">
            {employer.roles.some((role) => role.current) && (
              <span className="career-current">Current</span>
            )}
            <h2 id={`${employer.id}-heading`}>{employer.company}</h2>
            <p>{employer.dates}</p>
            {employer.client && (
              <p className="career-client">Client · {employer.client}</p>
            )}
          </div>
          <div className="career-roles">
            {employer.roles.map((role) => (
              <CareerRole key={role.role + role.dates} role={role} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  )
}
