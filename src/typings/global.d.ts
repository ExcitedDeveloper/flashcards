import { ReactNode, Dispatch } from 'react'
import { DashboardAction, DashboardState } from 'typings/dashboard.d'

export type NullableString = string | null | undefined
export type NullableBoolean = boolean | null | undefined
export type NullableNumber = number | null | undefined
export interface ChildrenProps {
  children: ReactNode
}

export interface GlobalContextProps {
  dashboardDispatch: Dispatch<DashboardAction>
  dashboardState: DashboardState
  browserHeight: NullableNumber
  browserWidth: NullableNumber
}
