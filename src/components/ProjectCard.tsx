import { Link } from 'react-router-dom'
import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="eyebrow">{project.category}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <h3>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="status">
        {project.status}
        {project.dates && ` · ${project.dates}`}
      </p>
      <p>{project.overview}</p>
      <ul className="tags" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link className="text-link" to={`/projects/${project.slug}`}>
        Explore project <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
