import { useReducer, Dispatch } from 'react'
import { DashboardState, DashboardAction } from 'typings/dashboard'

const useDashboardReducer = (): [DashboardState, Dispatch<DashboardAction>] => {
  const [state, dispatch] = useReducer(reducer, initState)
  return [state, dispatch]
}

const reducer = (
  state: DashboardState,
  action: DashboardAction
): DashboardState => {
  if (!isActionString(action.type)) {
    throw new Error(`useDashboardReducer action is not a string`)
  }
  if (Object.prototype.hasOwnProperty.call(actionsMap, action.type)) {
    return isActionString(action.type)
      ? actionsMap[action.type](state, action)
      : state
  }
  throw new Error(`Unknown useDashboardReducer action = ${action.type}`)
}

const actionsMap = {} as SymbolMap

actionsMap.MODE = (
  state: DashboardState,
  action: DashboardAction
): DashboardState => ({
  ...state,
  mode: action.mode,
})

const initState = {
  mode: 'Card List',
}

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
const isActionString = (type: string | number | symbol): type is string =>
  (type as string) !== undefined

// https://stackoverflow.com/questions/59118271/using-symbol-as-object-key-type-in-typescript
type SymbolMapTag = { readonly symbol: unique symbol }

type SymbolMap = SymbolMapTag &
  {
    // eslint-disable-next-line no-unused-vars
    [Key in string | number | symbol]: (
      // eslint-disable-next-line no-unused-vars
      state: DashboardState,
      // eslint-disable-next-line no-unused-vars
      action: DashboardAction
    ) => DashboardState
  }

export default useDashboardReducer
