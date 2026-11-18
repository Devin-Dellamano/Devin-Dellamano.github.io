export interface Project {
  slug: string
  title: string
  category: string
  status: string
  dates?: string
  technologies: string[]
  overview: string
  contributions: string[]
  note?: string
  screenshots?: { src: string; alt: string }[]
  videos?: { url: string; title: string }[]
  buildUrl?: string
  repositoryUrl?: string
}
export interface Resume {
  id: string
  icon: 'code' | 'gamepad'
  title: string
  description: string
  qualifications: string[]
  filename: string
  format: 'PDF'
  pageCount: number
  lastUpdated: string
}

export interface SkillSection {
  title: string
  items: string[]
}

export type SkillGroup = { title: string } & (
  { items: string[] } | { sections: SkillSection[] }
)

export interface ProfessionalExperience {
  company: string
  role: string
  dates: string
  description?: string
  summary: string
  contributions: string[]
  // Zero-based indexes across contributions followed by contributionSections.
  keyContributionIndexes?: number[]
  contributionSections?: { title: string; items: string[] }[]
  technologies: string[]
  technologyHighlights?: string[]
  primaryLanguage?: string
  location?: string
  titlePeriods?: { role: string; dates: string }[]
  program?: string
  note?: string
  featured?: boolean
  current?: boolean
}

export interface EmployerExperience {
  id: string
  navigationLabel?: string
  company: string
  dates: string
  client?: string
  roles: ProfessionalExperience[]
}

export interface ContactInfo {
  email: string
  linkedin: string
  location: { primary: string; secondary: string }
  interests: string[]
}
