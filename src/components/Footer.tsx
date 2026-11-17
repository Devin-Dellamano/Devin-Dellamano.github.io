import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer>
      <Link className="footer-name" to="/">
        Devin Dellamano
      </Link>
      <p>Software engineering. Interactive experiences.</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  )
}
