import React, { Component} from 'react';
import { FacebookProvider, Feed } from 'react-facebook';

export default class Fbfeed extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com/dustyorganmusic">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>
    );
  }
}
