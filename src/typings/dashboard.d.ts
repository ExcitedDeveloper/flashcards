import { MODE, DASHBOARD_ACTIONS } from 'util/enums'
import { NullableString } from './global.d'

export interface DashboardAction {
  type: DASHBOARD_ACTIONS
  mode?: MODE | null | undefined
  fileName?: NullableString
}

export interface DashboardState {
  mode: MODE | null | undefined
  fileName: NullableString
}
