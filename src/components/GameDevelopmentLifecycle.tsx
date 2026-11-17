import { gameDevelopmentLifecycle } from '../data/gameDevelopmentLifecycle'
import { SectionHeading } from './SectionHeading'

const iconPaths: Record<
  (typeof gameDevelopmentLifecycle.stages)[number]['icon'],
  string
> = {
  concept: 'M9 18h6 M10 21h4 M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z',
  design: 'M8 4H5v17h14V4h-3 M9 2h6v4H9Z M8 11h8 M8 15h8 M8 18h5',
  collaboration:
    'M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z M17 3a4 4 0 0 1 0 8 M23 21v-2a4 4 0 0 0-3-3.87',
  development: 'm8 6-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16',
  testing: 'M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z m6-2 6 6 M6 10l3 3 5-6',
  delivery: 'M12 16V2 M7 7l5-5 5 5 M4 14v7h16v-7',
}

export function GameDevelopmentLifecycle() {
  return (
    <section className="section lifecycle-section">
      <SectionHeading
        label={gameDevelopmentLifecycle.label}
        title={gameDevelopmentLifecycle.title}
      >
        <p className="section-intro">{gameDevelopmentLifecycle.description}</p>
      </SectionHeading>
      <div className="lifecycle-grid">
        {gameDevelopmentLifecycle.stages.map((stage) => (
          <article className="lifecycle-card" key={stage.number}>
            <div className="lifecycle-card-top">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d={iconPaths[stage.icon]} />
              </svg>
              <span className="lifecycle-number">{stage.number}</span>
            </div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
