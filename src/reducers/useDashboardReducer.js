import { useReducer } from 'react'

const useDashboardReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  return [state, dispatch]
}

const reducer = (state, action) => {
  if (Object.prototype.hasOwnProperty.call(actionsMap, action.type)) {
    return actionsMap[action.type](state, action)
  }
  throw new Error(`Unknown useDashboardReducer action = ${action.type}`)
}

const actionsMap = {}

actionsMap.MODE = (state, action) => ({
  ...state,
  mode: action.mode,
})

const initState = {
  mode: 'Card List',
}

export default useDashboardReducer
