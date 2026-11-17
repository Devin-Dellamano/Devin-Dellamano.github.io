import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ButtonLink'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { SkillGroups } from '../components/SkillGroups'
import { experience, projects } from '../data/portfolio'

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Devin Dellamano</p>
          <h1>
            Software Engineer
            <br />
            <span>& Game Developer</span>
          </h1>
          <p className="tagline">
            Engineering software.
            <br />
            Creating interactive experiences.
          </p>
          <p className="intro">
            Software engineer with 8+ years of professional experience across
            enterprise software, flight simulation, and cross-platform
            development, complemented by independent game development and mobile
            game publishing experience.
          </p>
          <div className="actions">
            <ButtonLink to="/projects">View Projects</ButtonLink>
            <ButtonLink to="/resumes" secondary>
              View Resumes
            </ButtonLink>
            <Link className="text-link" to="/contact">
              Contact →
            </Link>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Experience overview">
          <div className="aside-heading">Engineering across disciplines</div>
          <div className="discipline">
            <span>01</span>
            <div>
              <h2>Simulation</h2>
              <p>Professional flight simulation software</p>
            </div>
          </div>
          <div className="discipline">
            <span>02</span>
            <div>
              <h2>Software</h2>
              <p>C++ · C# · Java</p>
            </div>
          </div>
          <div className="discipline">
            <span>03</span>
            <div>
              <h2>Games</h2>
              <p>Unity systems & independent publishing</p>
            </div>
          </div>
          <p className="aside-footer">
            Technical leadership · Collaborative development
          </p>
        </aside>
      </section>
      <section className="section container">
        <div className="section-row">
          <SectionHeading
            label="Selected work"
            title="Systems built to be experienced."
          />
          <Link className="text-link" to="/projects">
            All projects →
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="experience-band">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              label="Professional experience"
              title="Engineering in practice."
            />
            <Link className="text-link" to="/experience">
              Full experience →
            </Link>
          </div>
          <p className="section-intro">
            Flight simulation, enterprise software, cross-platform development,
            debugging, performance optimization, and CI/CD.
          </p>
          {[experience[0], experience[2]].map((entry) => (
            <ExperienceEntry key={entry.role + entry.company} entry={entry} />
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="Technical toolkit"
          title="A foundation across software and games."
        />
        <SkillGroups />
      </section>
      <section className="closing container">
        <div>
          <h2>Explore the background behind the work.</h2>
          <p>
            Game development education and 8+ years in professional software
            engineering.
          </p>
        </div>
        <ButtonLink to="/about" secondary>
          About Devin
        </ButtonLink>
      </section>
    </>
  )
}
