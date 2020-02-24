import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchArticles, categoryAction} from '../actions'
import history from '../history'


class ArticlesCat extends React.Component {
  componentDidMount() {
      this.props.fetchArticles()

  }

  createArticle(article){
    return(
      <div class='Container'>
        <h2 className='blog post postmarg'>
        <Link id='hovermore2' onClick={(e) => e.stopPropagation()} to={`/article/${article._id}`}>{article.title}</Link>
        </h2>
        <div class='blogflex'>
        <p class='blogmarg'>{article.thadate.slice(0,10)}</p>
        <p class='blogmarg'>Kane Wilkinson</p>
        </div>
        <img onClick={() => history.push(`/article/${article._id}`)} class="img-fluid imghover" alt="Responsive image" src={article.imageUrl}/>
        <p class='topmarg'>{article.preview}...<Link id='hovermore' onClick={(e) => e.stopPropagation()} to={`/article/${article._id}`}>Read More</Link></p>
        <hr/>
      </div>

    )
  }

  renderList(){
    if(this.props.search){
      var term = this.props.search.toUpperCase()
    }
    else {
      var term = null
    }
    var i = 0
    return(
      this.props.articles.map((article) => {
        if(!term && article.category==this.props.category){
          return this.createArticle(article)
        }
        else if(term && (article.items.artist.join().includes(term) || article.title.includes(term)) && article.category == this.props.category){
          console.log(this.props.category)
          return this.createArticle(article)
        }
        else if(!this.props.category && (article.items.artist.join().includes(term) || article.title.includes(term) )) {
          console.log(this.props.category)
          return this.createArticle(article)
        }
        else if(!this.props.category && !term) {
          return this.createArticle(article)
        }
        else {
          return (null)
        }
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
    articles: Object.values(state.articles),
    category: state.category.category,
    search: state.category.search
  }
}

export default connect(mapStateToProps, {fetchArticles, categoryAction})(ArticlesCat)
