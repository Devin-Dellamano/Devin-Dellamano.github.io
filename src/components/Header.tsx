import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="monogram">
            dd<span>.</span>
          </span>
          <span>Devin Dellamano</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? 'open' : ''}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape') setMenuOpen(false)
          }}
        >
          {navigation.map(([path, label]) => (
            <NavLink
              end={path === '/'}
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </header>
  )
}
