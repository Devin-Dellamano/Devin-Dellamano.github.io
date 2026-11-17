import { SectionHeading } from '../components/SectionHeading'
import { SkillGroups } from '../components/SkillGroups'
import { PageIntro } from '../components/PageIntro'

export function About() {
  return (
    <div className="container page">
      <PageIntro
        label="About Devin"
        title="Engineering with an interactive mindset."
      >
        <p>
          I’m Devin Dellamano, a software engineer and game developer with 8+
          years of professional experience.
        </p>
      </PageIntro>
      <div className="about-grid">
        <div className="prose">
          <h2>From gameplay to flight simulation</h2>
          <p>
            My background spans enterprise software development, production
            support, product reliability, and professional flight simulation
            software. I work with C++, C#, and Java, with an emphasis on
            debugging, performance optimization, cross-platform software, and
            collaborative development.
          </p>
          <p>
            Game development remains a central interest. My work includes Unity
            gameplay systems, a team-built dungeon crawler, an independently
            published Android game, and an in-development multiplayer project
            using AI-assisted iteration with OpenAI Codex.
          </p>
          <p>
            I’m interested in gameplay systems, simulation, software
            engineering, and the process of bringing independent games to
            players.
          </p>
        </div>
        <aside className="education">
          <p className="eyebrow">Education</p>
          <h2>Bachelor of Science</h2>
          <p className="degree">Game Development and Programming</p>
          <p>Full Sail University</p>
          <p>2014–2016</p>
        </aside>
      </div>
      <section className="section">
        <SectionHeading
          label="Technical skills"
          title="Tools, systems, and practices"
        />
        <SkillGroups />
      </section>
    </div>
  )
}
