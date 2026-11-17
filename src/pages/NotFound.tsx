import { ButtonLink } from '../components/ButtonLink'
import { PageIntro } from '../components/PageIntro'

export function NotFound() {
  return (
    <div className="container page">
      <PageIntro label="Page unavailable" title="Page not found">
        <p>The requested page could not be found.</p>
      </PageIntro>
      <ButtonLink to="/">Back to Home</ButtonLink>
    </div>
  )
}
