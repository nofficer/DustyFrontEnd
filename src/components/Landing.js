import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from './Carousel'
import SideBox from './SideBox'
import Articles from './Articles'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Fbfeed from './fb'

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
          <div class='row'>
            <div class='col-8'>
              <Articles/>
            </div>
            <div class="col-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="dustyorgan"
              options={{height: 400}}
              />

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

export default connect(mapStateToProps)(Landing)
