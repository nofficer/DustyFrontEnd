import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Carousel extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className='landingscroll'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval='4000' pause='hover'>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://i2.wp.com/dustyorgan.com/wp-content/uploads/2020/02/Copy-of-November-22-2019-1-2.png?zoom=1.25&fit=300%2C169&ssl=1" alt="First slide"/>
              <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
              <div class='row'>
                <div class="col-sm">
                  February 20, 2020
                </div>
                <div class="col-sm">
                   Kane Wilkinson
                </div>
              </div>
                <h5>Beauts - Dalliance</h5>
              <a id="hovermore">Read More</a>
              </div>

            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://i2.wp.com/dustyorgan.com/wp-content/uploads/2020/02/Copy-of-November-22-2019-13.png?zoom=1.25&fit=300%2C169&ssl=1" alt="Second slide"/>
              <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
              <div class='row'>
                <div class="col-sm">
                  February 20, 2020
                </div>
                <div class="col-sm">
                   Kane Wilkinson
                </div>
              </div>
                <h5>Superparka - KawaBunga</h5>
              <a id="hovermore">Read More</a>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://i1.wp.com/dustyorgan.com/wp-content/uploads/2020/02/Copy-of-November-22-2019-12.png?zoom=1.25&fit=300%2C169&ssl=1" alt="Third slide"/>
              <div id="carouseldesc" class="carousel-caption d-none d-md-block slide-desc">
              <div class='row'>
                <div class="col-sm">
                  February 20, 2020
                </div>
                <div class="col-sm">
                   Kane Wilkinson
                </div>
              </div>
                <h5>Tyra Jutai - Nudes</h5>
              <a id="hovermore">Read More</a>
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
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps)(Carousel)
