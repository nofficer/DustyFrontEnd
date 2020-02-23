import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchArticles} from '../actions'


class Carousel extends React.Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    if(this.props.articles[0]){
      return (
        <div className='landingscroll'>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval='4000' pause='hover'>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={this.props.articles[0].imageUrl} alt="First slide"/>
                <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
                <div class='row'>
                  <div class="col-sm">
                    {this.props.articles[0].date}
                  </div>
                  <div class="col-sm">
                     Kane Wilkinson
                  </div>
                </div>
                  <h5>{this.props.articles[0].title}</h5>
                <Link id='hovermore' onClick={(e) => e.stopPropagation()} to={`/${this.props.articles[0]._id}`}>
                  Read More
                  </Link>
                </div>

              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={this.props.articles[1].imageUrl} alt="Second slide"/>
                <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
                <div class='row'>
                  <div class="col-sm">
                    {this.props.articles[1].date}
                  </div>
                  <div class="col-sm">
                     Kane Wilkinson
                  </div>
                </div>
                  <h5>{this.props.articles[1].title}</h5>
                  <Link id='hovermore' onClick={(e) => e.stopPropagation()} to={`/${this.props.articles[1]._id}`}>
                    Read More
                    </Link>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 " src={this.props.articles[2].imageUrl} alt="Third slide"/>
                <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
                <div class='row'>
                  <div class="col-sm">
                    {this.props.articles[2].date}
                  </div>
                  <div class="col-sm">
                     Kane Wilkinson
                  </div>
                </div>
                  <h5>{this.props.articles[2].title}</h5>
                  <Link id='hovermore' onClick={(e) => e.stopPropagation()} to={`/${this.props.articles[2]._id}`}>
                    Read More
                    </Link>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      )
    }
    else {
        return (
          <h1>Page Loading...</h1>
        )
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: Object.values(state.articles)
  }
}

export default connect(mapStateToProps, {fetchArticles})(Carousel)
