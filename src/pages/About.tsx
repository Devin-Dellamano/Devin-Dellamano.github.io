import { GameDevelopmentLifecycle } from '../components/GameDevelopmentLifecycle'
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
          I’m Devin Dellamano, a software engineer with 8+ years of professional
          experience and a background in independent game development.
        </p>
      </PageIntro>
      <div className="about-grid">
        <div className="prose">
          <h2>Bridging technology and creativity</h2>
          <p>
            My background combines professional software engineering with a
            comprehensive understanding of the game development lifecycle. My
            education and hands-on project experience encompass everything from
            initial concept development and gameplay design to programming,
            interdisciplinary collaboration, asset integration, testing,
            optimization, and final product delivery.
          </p>
          <p>
            I approach development with an understanding of both the technical
            and creative processes required to transform an idea into a complete
            product. Whether developing enterprise software, flight simulation
            systems, or independent games, I value collaboration, thoughtful
            design, technical problem-solving, and the experience of the end
            user.
          </p>
        </div>
        <aside className="education">
          <p className="eyebrow">Education</p>
          <h2>Bachelor of Science</h2>
          <p className="degree">Game Development and Programming</p>
          <p>Full Sail University</p>
          <p>2014–2016</p>
          <p>
            Comprehensive education in end-to-end game development, encompassing
            concept development, gameplay design, programming, collaboration
            with artists and musicians, asset integration, testing, and final
            product delivery.
          </p>
        </aside>
      </div>
      <GameDevelopmentLifecycle />
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
