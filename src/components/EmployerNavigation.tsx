import { useEffect, useId } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { EmployerExperience } from '../types'

export function EmployerNavigation({
  employers,
}: {
  employers: EmployerExperience[]
}) {
  const labelId = useId()
  const location = useLocation()

  useEffect(() => {
    const targetId = location.hash.slice(1)
    if (!employers.some((employer) => employer.id === targetId)) return
    const target = document.getElementById(targetId)
    if (!target) return
    const frame = window.requestAnimationFrame(() => {
      target.focus({ preventScroll: true })
      target.scrollIntoView({
        block: 'start',
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [employers, location.hash, location.key])

  return (
    <div className="career-jump">
      <p id={labelId}>Jump to experience.</p>
      <nav className="career-jump-links" aria-labelledby={labelId}>
        {employers.map((employer) => (
          <Link
            key={employer.id}
            to={{ pathname: '/experience', hash: `#${employer.id}` }}
          >
            {employer.navigationLabel ?? employer.company}
          </Link>
        ))}
      </nav>
    </div>
  )
}
