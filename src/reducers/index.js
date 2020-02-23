import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import articleReducer from './articleReducer'




export default combineReducers ({
  articles: articleReducer
})
