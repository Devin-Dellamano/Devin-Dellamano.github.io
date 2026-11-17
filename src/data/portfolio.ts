import type { Project, Resume } from '../types'

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
    status: 'In development',
    technologies: ['Unity', 'C#', 'Git', 'OpenAI Codex'],
    overview:
      'A mobile-first multiplayer combat game in development. The design centers on gesture-based rune casting, spell interactions, resource management, and real-time combat.',
    contributions: [
      'Gameplay design, functional requirements, and user experience design.',
      'Development priorities and AI-assisted implementation and iteration using OpenAI Codex.',
      'Development and testing of multiplayer networking functionality.',
    ],
    note: 'Rune casting, spell interactions, resource management, and real-time combat describe the intended design. Completion of those systems has not been confirmed. Multiplayer networking is under development and testing.',
  },
  {
    slug: 'directx-graphics',
    title: 'DirectX Graphics Programming',
    category: 'Graphics foundations',
    status: 'Academic coursework',
    technologies: ['DirectX'],
    overview:
      'Developed a partial graphics engine during Graphics Programming I and II coursework at Full Sail University.',
    contributions: [
      'Foundational graphics programming experience through the development of a partial graphics engine.',
    ],
  },
  {
    slug: 'ai-pathfinding',
    title: 'Artificial Intelligence & Pathfinding',
    category: 'Autonomous behavior',
    status: 'Academic coursework',
    technologies: [],
    overview:
      'Two academic projects exploring artificial intelligence, autonomous agent behavior, and pathfinding.',
    contributions: [
      'An autonomous Pac-Man agent designed to navigate without player input while avoiding ghosts.',
      'A simulated combat robot using AI to compete against robots programmed by other students.',
    ],
  },
]
export const experience = [
  {
    company: 'Tapestry Solutions',
    role: 'Software Engineer',
    dates: 'August 2026 – Present',
    description:
      'Technical implementation leadership for Java/Cucumber testing integration, repository configuration, and coordination between software and testing teams.',
  },
  {
    company: 'Boeing',
    role: 'Production Support Engineer',
    dates: 'November 2025 – July 2026',
  },
  {
    company: 'Boeing',
    role: 'Flight Simulation Software Engineer',
    dates: 'May 2022 – November 2025',
  },
  {
    company: 'Infosys',
    role: 'Product Reliability Engineer',
    dates: 'September 2021 – May 2022',
  },
  {
    company: 'Infosys',
    role: 'Production Support Analyst',
    dates: 'August 2020 – September 2021',
  },
  {
    company: 'Infosys',
    role: 'Technical Analyst',
    dates: 'March 2018 – August 2020',
  },
  {
    company: 'Revature',
    role: 'Full Stack Developer',
    dates: 'January 2018 – March 2018',
  },
]
export const skills = [
  { title: 'Programming languages', items: ['C++', 'C#', 'Java'] },
  {
    title: 'Gameplay & simulation',
    items: [
      'Unity',
      'Flight simulation',
      'Gameplay systems',
      'DirectX foundations',
      'AI & pathfinding',
    ],
  },
  { title: 'Web development', items: ['Full stack development'] },
  {
    title: 'Development tools & CI/CD',
    items: [
      'Git',
      'CI/CD',
      'Cucumber',
      'Debugging',
      'Performance optimization',
      'Cross-platform software',
    ],
  },
  {
    title: 'AI-assisted development',
    items: ['OpenAI Codex', 'Requirements-driven iteration'],
  },
]
export const resumes: Resume[] = [
  {
    title: 'Software Engineering Resume',
    description:
      'Professional software engineering, flight simulation, enterprise development, and technical implementation leadership.',
  },
  {
    title: 'Game Development Resume',
    description:
      'Gameplay systems, Unity and C#, independent publishing, and game development education.',
  },
]
export const contact: {
  email?: string
  linkedin?: string
  github: string
  githubConfirmed: boolean
} = {
  github: 'https://github.com/devin-dellamano',
  githubConfirmed: false,
}
