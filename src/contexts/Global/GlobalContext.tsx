import React, { createContext } from 'react'
import useDashboardReducer from 'reducers/useDashboardReducer'
import PropTypes from 'prop-types'
import { DashboardState, DashboardAction, ContextProps } from 'typings/dashboard';



export const Context = createContext({} as ContextProps)

export const Provider = ({ children }) => {
  const [dashboardState, dashboardDispatch] = useDashboardReducer()

  return (
    <Context.Provider value={{ dashboardState, dashboardDispatch }}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node,
}

export const { Consumer } = Context
