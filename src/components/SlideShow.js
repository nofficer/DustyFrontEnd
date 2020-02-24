import React from 'react';
import { Slide } from 'react-slideshow-image';
import { connect } from 'react-redux';


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class SlideShow extends React.Component {
  componentDidMount() {

  }

  pictureHelper(){
    return (this.props.pics.map((pic)=> {
          return (
            <div className="each-slide blackslide text-center">
              <img id="smallerimg" className="img-fluid" src={pic}/>
              </div>

          )
    })
  )
  }

  render(){
    return (
      <Slide {...properties}>
        {this.pictureHelper()}
      </Slide>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps)(SlideShow)
