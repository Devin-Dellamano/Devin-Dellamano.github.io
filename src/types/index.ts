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
