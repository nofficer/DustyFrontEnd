import {FETCH_ARTICLE, FETCH_ARTICLES} from './types'
import articles from '../apis/articles'

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await articles.get('/');
    dispatch({type:FETCH_ARTICLES, payload:response.data})
  }
}
