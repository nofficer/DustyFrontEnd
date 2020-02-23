import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchArticles} from '../actions'


class Articles extends React.Component {
  componentDidMount() {
      this.props.fetchArticles()

  }

  createArticle(article){
    return(
      <div class='Container'>
        <h2 className='blog post postmarg'>
        {article.title}
        </h2>
        <div class='blogflex'>
        <p class='blogmarg'>{article.date}</p>
        <p class='blogmarg'>Kane Wilkinson</p>
        </div>
        <img class="img-fluid" alt="Responsive image" src={article.imageUrl}/>
        <p class='topmarg'>{article.preview}</p>
      </div>
    )
  }

  renderList(){
    return(
      this.props.articles.map((article) => {
        return this.createArticle(article)
      })
    )

  }

  render() {
    return (
      <div>
        <div class='container'>
        {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: Object.values(state.articles)
  }
}

export default connect(mapStateToProps, {fetchArticles})(Articles)
