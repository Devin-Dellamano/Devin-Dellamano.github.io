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
  title: string
  description: string
  pdf?: string
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
  technologies: string[]
  current?: boolean
}

export interface EmployerExperience {
  company: string
  dates: string
  roles: ProfessionalExperience[]
}
