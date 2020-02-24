import React from 'react'
import { connect } from 'react-redux'
import {fetchArticles, goSearch, categoryAction} from '../actions'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import YouTube from 'react-youtube-embed'


class ArticleShow extends React.Component {
  componentDidMount() {
      this.props.fetchArticles()
  }

  inpoHelper(article){
    var i = -1
    console.log("helper is running")
    return (article.items.artist.map(() => {
      i++

      return(

        <div class='row no-gutters inpofont'>

        <div  class='col-3'>
          <img class='img-thumbnail float-left' alt='thumb1' src={article.items.pics[i]}/>
        </div>
        <div  class='col-9'>
          <h2 id='oldstandard' class='inpoleft'>{article.items.artist[i]}</h2>
          <h3 id='playfair' class='inpoleft'>{article.items.genre[i]}</h3>
          <h3 id='playfair' class='inpoleft'>{article.items.words[i]}</h3>
          <h3 id='playfair' class='inpoleft'>{article.items.tracks[i]}</h3>

        </div>

        <div className='playercontainer col-12'>
        <h3 id='oldstandard2' className='centertext'>{article.items.rating[i]} / 10</h3>
          <YouTube aspectRatio='16:9' id={article.items.videos[i]} />


        </div>
        <div className='playercontainer col-12 padtop'>
        <a className='linkGrey' href={article.items.websites}>Website.</a>
        <hr/>
        </div>
        </div>
      )
    })
  )
  }

  reviewHelper(article){
    var i = -1
    console.log("helper is running")
    return (article.items.artist.map(() => {
      i++
      return(
        <div className='reviewText'>
          <img class='img' alt='reviewpic' src={article.items.pics[i]}/>
          <p className='topmarg'>{article.items.rating[i]}</p>
          <YouTube aspectRatio='16:9' id={article.items.videos[i]} />
        </div>
      )
    })
  )
  }

  festHelper(article) {
    var i = -1
    console.log("helper is running")
    return (article.items.artist.map(() => {
      i++
      return(
        <div className='reviewText'>
          <h3 id='oldstandard' className='topmarg'>{article.items.artist[i]}</h3>
          <h3 id='oldstandard' className='topmarg'>{article.items.genre[i]}</h3>
          <p id='oldstandard2' className='topmarg'>{article.items.tracks[i]}</p>
          <YouTube aspectRatio='16:9' id={article.items.videos[i]} />
          <hr/>
        </div>
      )
    })
  )
  }


  createArticle(article){
    if(article.category=='INPO'){
      return(
        <div class='Container whiteC'>
          <h2 className='blog post postmarg reviewText'>
          {article.title}
          </h2>
          <div class='blogflex'>
          <p class='blogmarg'>{article.date}</p>
          <p class='blogmarg'>Kane Wilkinson</p>
          </div>
          <img class="img-fluid" alt="Responsive image" src={article.imageUrl}/>
          <p class='topmarg reviewText'>{article.description}</p>
          <hr/>

          {this.inpoHelper(article)}

        </div>
      )
    }
    else if(article.category=='REVIEW'){
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
          <p class='topmarg reviewText'>{article.description}</p>


          {this.reviewHelper(article)}

        </div>
      )
    }
    else if(article.category=='FEST'){
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
          <p class='topmarg reviewText'>{article.description}</p>
          <hr/>
          {this.festHelper(article)}

        </div>
      )
    }
    else {
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

  }


  render() {
    if(this.props.article){
      return (
        <div class='row whiteC no-gutters'>
          <div class='col-8'>
            <div class='container'>
              {this.createArticle(this.props.article)}
            </div>
          </div>
          <div class='col-4'>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="dustyorgan"
            options={{height: 2000}}
            />
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

export default connect(mapStateToProps, {fetchArticles, goSearch, categoryAction})(ArticleShow)
