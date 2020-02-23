import _ from 'lodash'

import {
  FETCH_ARTICLES,
  FETCH_ARTICLE
} from '../actions/types'


export default (state ={}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {...state, ..._.mapKeys(action.payload, '_id')  };
    default:
      return state
  }
}
