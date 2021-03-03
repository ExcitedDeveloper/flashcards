import './App.css'
import Dashboard from 'components/Dashboard'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from 'ErrorPage'
import { GlobalContextProvider } from './contexts/Global'

function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <GlobalContextProvider>
        <Dashboard />
      </GlobalContextProvider>
    </ErrorBoundary>
  )
}

export default App
