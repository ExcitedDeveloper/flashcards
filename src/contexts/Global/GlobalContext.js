import React, { createContext } from 'react'
import useDashboardReducer from 'reducers/useDashboardReducer'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [dashboardState, dashboardDispatch] = useDashboardReducer()

  return (
    <Context.Provider value={{ dashboardState, dashboardDispatch }}>
      {children}
    </Context.Provider>
  )
}

export const { Consumer } = Context
