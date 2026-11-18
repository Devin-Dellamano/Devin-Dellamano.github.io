import { useId, useState } from 'react'
import type { ProfessionalExperience } from '../types'

function ContributionList({ items }: { items: string[] }) {
  return (
    <ul className="career-contributions">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function ExperienceDetails({ role }: { role: ProfessionalExperience }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()
  const groups = [
    { title: undefined, items: role.contributions },
    ...(role.contributionSections ?? []),
  ]
  const allContributions = groups.flatMap((group) => group.items)
  const keyIndexes =
    role.keyContributionIndexes ?? allContributions.map((_, index) => index)
  const keyContributions = keyIndexes.map((index) => allContributions[index])
  const selectedIndexes = new Set(keyIndexes)
  let groupOffset = 0
  const detailedGroups = groups
    .map((group) => {
      const items = group.items.filter(
        (_, index) => !selectedIndexes.has(groupOffset + index),
      )
      groupOffset += group.items.length
      return { ...group, items }
    })
    .filter((group) => group.items.length > 0)

  return (
    <>
      <ContributionList items={keyContributions} />
      {detailedGroups.length > 0 && (
        <div className="career-details">
          <button
            className="career-details-toggle"
            type="button"
            aria-expanded={expanded}
            aria-controls={detailsId}
            aria-label={`${expanded ? 'Hide' : 'View'} detailed experience for ${role.role} at ${role.company}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide detailed experience' : 'View detailed experience'}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div id={detailsId} hidden={!expanded}>
            {detailedGroups.map((group) => (
              <section
                className="career-contribution-section"
                key={group.title ?? 'contributions'}
              >
                {group.title && <h4>{group.title}</h4>}
                <ContributionList items={group.items} />
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
