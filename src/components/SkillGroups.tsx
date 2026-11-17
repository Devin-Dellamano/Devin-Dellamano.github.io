import { skills } from '../data/portfolio'

function SkillList({ items }: { items: string[] }) {
  return (
    <ul className="skill-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function SkillGroups() {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <section key={group.title}>
          <h3>{group.title}</h3>
          {'sections' in group ? (
            group.sections.map((section) => (
              <div className="skill-subgroup" key={section.title}>
                <h4>{section.title}</h4>
                <SkillList items={section.items} />
              </div>
            ))
          ) : (
            <SkillList items={group.items} />
          )}
        </section>
      ))}
    </div>
  )
}
