import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class SideBox extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="sidebox">
          <div className='sideitem'>
            <img class="d-block w-100 hfix" src="https://i2.wp.com/dustyorgan.com/wp-content/uploads/2019/08/Mura-Masa.jpg?w=1280&ssl=1"/>
            <a className='centered'>MURA MASA – I DON’T THINK I CAN DO THIS AGAIN FT. CLAIRO</a>
          </div>
          <div className='sideitem'>
            <img class="d-block w-100 hfix" src="https://i0.wp.com/dustyorgan.com/wp-content/uploads/2019/11/November-9-2019.png?w=560&ssl=1"/>
            <a className='centered'>IN NO PARTICULAR ORDER – NOVEMBER 9, 2019</a>
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
