/* eslint-disable @typescript-eslint/no-explicit-any */

const ErrorPage = ({
  error,
  resetErrorBoundary,
}: {
  error: any
  resetErrorBoundary: any
}): JSX.Element => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
)

export default ErrorPage
