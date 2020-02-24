import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from './Carousel'
import SideBox from './SideBox'

import ArticlesCat from './ArticlesCat'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Fbfeed from './fb'

class Landing extends React.Component {
  componentDidMount() {

  }

  render() {
    if(!this.props.category && !this.props.search) {
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
                <ArticlesCat/>
              </div>
              <div class="col-4">
              <div className='noscroll'>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="dustyorgan"
                  options={{height: 3000}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      )
    }
    else {
      return (
        <div class="container whiteblock">
          <div class="row">
            <div class='row'>
              <div class='col-8'>
                <ArticlesCat/>
              </div>
              <div class="col-4">
              <div className='noscroll'>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="dustyorgan"
                  options={{height: 3000}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      )
    }


    }
  }

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.category.category,
    search: state.category.search
  }
}

export default connect(mapStateToProps)(Landing)
