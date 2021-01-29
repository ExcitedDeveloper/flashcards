import { Dispatch } from 'react'
import { NullableString } from './global'

export interface DashboardAction {
  mode?: NullableString
}

export interface DashboardState {
  mode: NullableString
}

export interface ContextProps {
  dashboardDispatch: Dispatch<DashboardAction>
  dashboardState: DashboardState
}
