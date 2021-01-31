import './App.css'
import Dashboard from 'components/Dashboard'
import { GlobalContextProvider } from './contexts/Global'

function App() {
  return (
    <GlobalContextProvider>
      <Dashboard />
    </GlobalContextProvider>
  )
}

export default App
