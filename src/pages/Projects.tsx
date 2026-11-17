import { ProjectCard } from '../components/ProjectCard'
import { PageIntro } from '../components/PageIntro'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <div className="container page">
      <PageIntro label="Selected work" title="Projects">
        <p>
          Gameplay systems, independent releases, and the foundations behind
          them.
        </p>
      </PageIntro>
      <div className="project-grid all-projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
