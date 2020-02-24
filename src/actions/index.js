import {FETCH_ARTICLE, FETCH_ARTICLES, CATEGORY, SEARCH} from './types'
import articles from '../apis/articles'
import history from '../history'

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await articles.get('/');
    dispatch({type:FETCH_ARTICLES, payload:response.data})
  }
}

export const categoryAction = (c) => {
  return {type:CATEGORY, payload: c}
}

export const goSearch = (term) => {
  if(term != ''){
    history.push('/Search='+term)
  }
  else {
    history.push('/')
  }
  return {type:SEARCH, payload: term}
}
