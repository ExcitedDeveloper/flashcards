import { useReducer, Dispatch } from 'react'
import { DashboardState, DashboardAction } from 'typings/dashboard'
import { MODE, DASHBOARD_ACTIONS } from 'util/enums'

const useDashboardReducer = (): [DashboardState, Dispatch<DashboardAction>] => {
  const [state, dispatch] = useReducer(reducer, initState)
  return [state, dispatch]
}

const reducer = (
  state: DashboardState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case DASHBOARD_ACTIONS.MODE:
      return {
        ...state,
        mode: action.mode,
      }
    case DASHBOARD_ACTIONS.FILE_NAME:
      return {
        ...state,
        fileName: action.fileName,
      }
    default:
      throw new Error(
        `Unknown useDashboardReducer action = ${String(action.type)}`
      )
  }
}

const initState = {
  mode: MODE.LIST,
  fileName: '',
}

export default useDashboardReducer
