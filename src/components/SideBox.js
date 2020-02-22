import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class SideBox extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="sidebox">
      <div id="carouselExampleSlidesOnly" class="carousel slide marg" data-ride="carousel">
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

      <div id="carouselExampleSlidesOnly" class="carousel slide marg" data-ride="carousel">
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

  }
}

export default connect(mapStateToProps)(SideBox)
