import { BUY_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10,
  pastry: 100
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case 'BUY_PASTRY':
      return {
        ...state,
        pastry: state.pastry - 1
      }
    default:
      return state
  }
}

export default cakeReducer
