import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history'


class SideBox extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="sidebox">
      <div onClick={()=> {history.push('/article/5e5457b8ec5a78e0fa370d09')}} id="carouselExampleSlidesOnly" class="carousel slide marg hoverc" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i2.wp.com/dustyorgan.com/wp-content/uploads/2019/08/Mura-Masa.jpg?w=1280&ssl=1" alt="First slide"/>
              <div  class="carousel-caption d-none d-md-block">
                <h5 id="hovermore" className="smallertext">MURA MASA – I DON’T THINK I CAN DO THIS AGAIN FT. CLAIRO</h5>
                <p className="smallp"> August 22, 2019 </p>
              </div>
          </div>
        </div>
      </div>

      <div onClick={()=> {history.push('/article/5e545d43eb972ad7fa7e51e5')}} id="carouselExampleSlidesOnly" class="carousel slide marg hoverc" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i0.wp.com/dustyorgan.com/wp-content/uploads/2019/11/November-9-2019.png?w=560&ssl=1" alt="Sec slide"/>
              <div  class="carousel-caption d-none d-md-block">
                <h5 id="hovermore" className="smallertext">IN NO PARTICULAR ORDER – NOVEMBER 9, 2019</h5>
                <p className="smallp"> November 9, 2019 </p>
              </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(SideBox)
