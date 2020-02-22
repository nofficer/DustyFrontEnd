import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from './Carousel'
import SideBox from './SideBox'


class Landing extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div class="container whiteblock">
        <div class="row">
          <div class="col-8">
            <Carousel/>
          </div>
          <div class="col-4">
            <SideBox/>
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

export default connect(mapStateToProps)(Landing)
