import { useRouteError } from 'react-router-dom'

// Helpers
import isError from 'helpers/isError'

const ErrorPage: React.FC<{ error?: Error }> = ({ error }) => {
  const routeError = useRouteError() as Error
  console.error(routeError, error)
  console.log(error)
  const err = error || routeError
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-warning">{isError(err) && <i>{err.message}</i>}</p>
    </div>
  )
}
export default ErrorPage
