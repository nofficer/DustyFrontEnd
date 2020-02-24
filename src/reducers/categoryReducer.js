import { CATEGORY,SEARCH } from '../actions/types'

const INITIAL_STATE = {
  category: null,
  search: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY:
      return { ...state , category: action.payload };
    case SEARCH:
      return {...state, search: action.payload};
    default:
    return state
  }
}
