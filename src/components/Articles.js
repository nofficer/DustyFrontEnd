import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Articles extends React.Component {
  componentDidMount() {

  }

  render() {

    return (
      <div class='Container'>
        <h2 className='blog post postmarg'>
          IN NO PARTICULAR ORDER – FEBRUARY 21, 2020
        </h2>
        <div class='blogflex'>
        <p class='blogmarg'>February 22, 2020</p>
        <p class='blogmarg'>Kane Wilkinson</p>
        </div>
        <img src="https://i1.wp.com/dustyorgan.com/wp-content/uploads/2020/02/November-22-2019-4.png?w=560&ssl=1"/>
        <p class='topmarg'>Time is of the essence today, so this week’s In No Particular Order shall be kept short and sweet! I’ll be describing each album in just three words – hopefully you’ll discover something to pique your interest and satisfy your ever-shrinking attention span! And as per usual, these are some of my picks but in no particular order… Enjoy! Beauts – Dalliance (Indie rock/post-punk) Summery. Nostalgic. Glossy. Notable tracks: “The City Loves Me” // “Good Measure” // “Hurry” 7.5/10 Full stream/Website. Read the full review. Moses Sumney – græ (Avant-garde/Nu-R&B)…</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps)(Articles)
