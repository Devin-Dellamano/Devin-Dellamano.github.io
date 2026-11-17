import { skills } from '../data/portfolio'

export function SkillGroups() {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <section key={group.title}>
          <h3>{group.title}</h3>
          <ul className="skill-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
