export function ExperienceEntry({
  entry,
}: {
  entry: { company: string; role: string; dates: string; description?: string }
}) {
  return (
    <article className="experience-entry">
      <p className="dates">{entry.dates}</p>
      <div>
        <h3>{entry.role}</h3>
        <p className="company">{entry.company}</p>
        {entry.description && <p>{entry.description}</p>}
      </div>
    </article>
  )
}
