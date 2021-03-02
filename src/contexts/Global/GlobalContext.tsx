import React, { createContext } from 'react'
import useDashboardReducer from 'reducers/useDashboardReducer'
import PropTypes from 'prop-types'
import { ChildrenProps, GlobalContextProps } from 'typings/global.d'
import useBrowserSize from 'hooks/useBrowserSize'

export const Context = createContext<Partial<GlobalContextProps>>({})

export const Provider = ({ children }: ChildrenProps) => {
  const [dashboardState, dashboardDispatch] = useDashboardReducer()
  const { browserWidth, browserHeight } = useBrowserSize()

  return (
    <Context.Provider
      value={{ dashboardState, dashboardDispatch, browserHeight, browserWidth }}
    >
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node,
}

export const { Consumer } = Context
