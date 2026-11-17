import { useEffect, useState } from 'react'
type Theme = 'light' | 'dark'
function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* System preference remains available when storage is restricted. */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* Keep the toggle usable without storage. */
    }
  }, [theme])
  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  }
}
