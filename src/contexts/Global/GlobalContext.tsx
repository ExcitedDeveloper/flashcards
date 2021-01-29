import React, { createContext } from 'react'
import useDashboardReducer from 'reducers/useDashboardReducer'
import PropTypes from 'prop-types'
import { ContextProps } from 'typings/dashboard'
import { ChildrenProps } from 'typings/global.d'

export const Context = createContext<Partial<ContextProps>>({})

export const Provider = ({ children }: ChildrenProps) => {
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
