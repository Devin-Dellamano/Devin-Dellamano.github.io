import type { ContactInfo, Project, Resume, SkillGroup } from '../types'

export const projects: Project[] = [
  {
    slug: 'mulysa',
    title: 'Mulysa',
    category: 'Gameplay systems',
    status: 'Playable academic capstone',
    dates: '2016',
    technologies: ['Unity', 'C#', 'Git', 'Android'],
    overview:
      'A first-person, party-based horror dungeon crawler inspired by Legend of Grimrock. Four characters investigate an abandoned asylum across three playable levels, developed by approximately six team members over three months.',
    contributions: [
      'Inventory and equipment systems, including drag-and-drop interactions, item stacking, equipment slots, and conversion between interactive 3D objects and 2D inventory sprites.',
      'Character creation, classes, attributes, experience points, leveling, skill trees, and skills.',
      'Melee and ranged combat, damage calculations, collision detection, hit registration, and weapon statistics.',
      'Throwable weapon physics and melee swipe effects.',
      'Complete game UI and menu functionality.',
      'Visibility-based rendering optimization targeting Android performance.',
      'Git repository management, branching, merging, and conflict resolution.',
    ],
    note: 'A playable build and trailer exist and will be added later. VR integration was implemented by another team member.',
  },
  {
    slug: 'missile-barrage',
    title: 'Missile Barrage',
    category: 'Independent release',
    status: 'Previously published',
    dates: 'Approximately 2016',
    technologies: ['Unity', 'C#', 'Android', 'Google Play'],
    overview:
      'An independent mobile arcade defense game published under Della Games. Players tap falling missiles and bombs to protect a city as projectiles increase in speed through successive levels.',
    contributions: [
      'Designed and implemented the entire game independently.',
      'Touch-based gameplay mechanics, projectile behavior, and city defense gameplay.',
      'Level progression and difficulty scaling.',
      'Android build preparation, deployment, and publishing.',
    ],
    note: 'Previously published on Google Play and subsequently removed from the store. An archived playable build exists and will be added later.',
  },
  {
    slug: 'rune-multiplayer',
    title: 'Rune-Based Multiplayer Game',
    category: 'Current development',
    status: 'Playable prototype completed · In active development',
    technologies: ['Unity', 'C#', 'Git', 'OpenAI Codex'],
    overview:
      'A mobile-first combat game with a completed, playable single-player prototype featuring gesture-based rune drawing and recognition, rune-based spell casting, spell interactions, resource management, and real-time combat. The prototype includes an interactive tutorial and a basic AI opponent. Multiplayer networking is under development and testing.',
    contributions: [
      'Gameplay design, functional requirements, and user experience design.',
      'Development priorities and AI-assisted implementation and iteration using OpenAI Codex.',
      'Completed a playable single-player prototype with gesture-based rune drawing and recognition, rune-based spell casting, spell interactions, resource management, and real-time combat.',
      'Implemented an interactive tutorial and single-player combat against a basic AI opponent.',
      'Development and testing of multiplayer networking functionality.',
    ],
    note: 'A functional, playable prototype has been completed, featuring gesture-based rune casting, spell interactions, resource management, and real-time combat. The prototype includes an interactive tutorial and single-player combat against a basic AI opponent. Current development is focused on implementing and testing multiplayer functionality.',
  },
]
export { careerOverview, employers, experience } from './experience'

export const skills: SkillGroup[] = [
  {
    title: 'Programming & Languages',
    sections: [
      {
        title: 'Primary Languages',
        items: ['C++', 'C#', 'Java'],
      },
      {
        title: 'Additional Experience',
        items: ['Python', 'SQL'],
      },
    ],
  },
  {
    title: 'Game Development & Simulation',
    items: [
      'Unity',
      'Gameplay systems',
      'Flight simulation',
      'Game UI development',
      'Mobile game development',
    ],
  },
  {
    title: 'Web & Enterprise Development',
    items: [
      'Full stack development',
      'REST APIs',
      'Angular',
      'React / Redux (training)',
    ],
  },
  {
    title: 'Software Engineering',
    items: [
      'Cross-platform development',
      'Windows & Linux development',
      'Cross-platform software migration',
      'Software modernization',
      'Performance optimization',
      'Debugging and troubleshooting',
      'Requirements-driven development',
      'Production Support & Troubleshooting',
    ],
  },
  {
    title: 'Development Tools & Testing',
    items: [
      'Git and version control',
      'GitLab CI/CD',
      'Cucumber / Behavior-Driven Development (BDD)',
      'Test automation',
      'AI-assisted development (OpenAI Codex)',
    ],
  },
  {
    title: 'Technical Leadership & Collaboration',
    items: [
      'Technical implementation leadership',
      'Cross-team collaboration',
      'Repository management',
      'Technical documentation',
      'Development coordination',
    ],
  },
]
export const resumes: Resume[] = [
  {
    id: 'software-engineering',
    icon: 'code',
    title: 'Software Engineering',
    description:
      'Focused on professional software development, technical leadership, legacy modernization, and enterprise engineering.',
    qualifications: [
      'C++, C#, and Java',
      'Technical implementation leadership',
      'Cross-platform development',
      'Software modernization and CI/CD',
      'Enterprise software engineering',
    ],
    filename: 'Devin_Dellamano_Software_Engineering_Resume.pdf',
    format: 'PDF',
    pageCount: 2,
    lastUpdated: '2026-11',
  },
  {
    id: 'game-development',
    icon: 'gamepad',
    title: 'Game Development',
    description:
      'Focused on real-time simulation, gameplay programming, interactive systems, and independent game development.',
    qualifications: [
      'C++, C#, and Unity',
      '3.5 years of real-time simulation',
      'Gameplay and combat systems',
      'Android game development',
      'Independent game publishing',
    ],
    filename: 'Devin_Dellamano_Game_Development_Resume.pdf',
    format: 'PDF',
    pageCount: 2,
    lastUpdated: '2026-11',
  },
]
export const contact: ContactInfo = {
  email: 'dellamanodevin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devin-dellamano-732545114/',
  location: {
    primary: 'Greater St. Louis Metropolitan Area',
    secondary: 'Illinois, United States',
  },
  interests: [
    'Software Engineering',
    'Technical Leadership',
    'Real-Time Simulation',
    'Game Development',
    'Software Modernization',
  ],
}
