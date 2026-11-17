import { Link, useParams } from 'react-router-dom'
import { PageIntro } from '../components/PageIntro'
import { projects } from '../data/portfolio'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  return (
    <article className="container page detail">
      <Link className="text-link" to="/projects">
        ← All projects
      </Link>
      <PageIntro label={project.category} title={project.title}>
        <p>
          {project.status}
          {project.dates && ` · ${project.dates}`}
        </p>
      </PageIntro>
      <ul className="tags">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <section>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>
      <section>
        <h2>
          {project.slug === 'rune-multiplayer'
            ? 'Individual responsibilities'
            : 'Individual technical contributions'}
        </h2>
        <ul className="contributions">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {project.note && <p className="note">{project.note}</p>}
      {project.screenshots?.map((shot) => (
        <img
          className="project-image"
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
        />
      ))}
      {project.videos?.map((video) => (
        <p key={video.url}>
          <a href={video.url}>{video.title} ↗</a>
        </p>
      ))}
      <div className="actions">
        {project.buildUrl && (
          <a className="button" href={project.buildUrl} download>
            Download build
          </a>
        )}
        {project.repositoryUrl && (
          <a className="button secondary" href={project.repositoryUrl}>
            View repository ↗
          </a>
        )}
      </div>
    </article>
  )
}
