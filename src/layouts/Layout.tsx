import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
export default function Layout() {
  const location = useLocation()
  const main = useRef<HTMLElement>(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    const heading = main.current?.querySelector('h1')
    document.title = `${heading?.textContent ?? 'Portfolio'} | Devin Dellamano`
    main.current?.focus()
  }, [location.pathname])
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
        }}
      >
        Skip to content
      </a>
      <Header />
      <main ref={main} id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
