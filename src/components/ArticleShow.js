import React from 'react'

import { connect } from 'react-redux'
import {fetchArticles} from '../actions'

import YouTube from 'react-youtube-embed'


class ArticleShow extends React.Component {
  componentDidMount() {
      this.props.fetchArticles()

  }

  createArticle(article){
    return(
      <div class='Container whiteC'>
        <h2 className='blog post postmarg'>
        {article.title}
        </h2>
        <div class='blogflex'>
        <p class='blogmarg'>{article.date}</p>
        <p class='blogmarg'>Kane Wilkinson</p>
        </div>
        <img class="img-fluid" alt="Responsive image" src={article.imageUrl}/>
        <p class='topmarg'>{article.description}</p>
        <YouTube aspectRatio='16:9' id={article.items.videos[0]} />
      </div>
    )
  }


  render() {
    if(this.props.article){
      return (
        <div>
          <div class='container'>
          {this.createArticle(this.props.article)}
          </div>
        </div>
      )
    }
    else {
      return <h1>Page Loading... </h1>
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.articles[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchArticles})(ArticleShow)
