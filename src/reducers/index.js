import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'




export default combineReducers ({
  articles: articleReducer,
  category: categoryReducer
})
