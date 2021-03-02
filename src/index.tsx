import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-enterprise/all-modules/dist/styles/ag-theme-alpine.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
