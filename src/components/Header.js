import React from 'react'
import { Link } from 'react-router-dom'
import {categoryAction, goSearch} from '../actions'
import { connect } from 'react-redux'


class Header extends React.Component {
    makedate(){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      return date
    }



  render() {
    return (
      <div>
        <div class='jumbotron' id="jumbo">
        <h2 class='title' ><Link onClick={(e) => {e.stopPropagation()
            this.props.categoryAction(null)
            this.props.goSearch(null)
        }} to={`/`} id='hovermore'>DUSTY ORGAN</Link></h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              {this.makedate()}
            </div>
            <div class="col-sm">

            </div>
            <div class="col-sm right">
              <a href="https://facebook.com/dustyorganmusic" id='greything' class="fa fa-facebook margina"></a>
              <a href="https://twitter.com/DustyOrgan" id='greything' class="fa fa-twitter margina"></a>
              <a href="https://www.instagram.com/dusty_organ/" id='greything' class="fa fa-instagram margina"></a>
            </div>
          </div>
          </div>
        </div>
  <nav class="navbar navbar-expand-lg navbar-light navborder whiteitem" >

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a id="blackitem" class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        NEW RELEASES
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link  to='/' id="blackitem" onClick={(e) => this.props.categoryAction('ALBUMS')} class="dropdown-item" href="#">ALBUMS</Link>
        <Link  to='/' id="blackitem" onClick={(e) => this.props.categoryAction('SINGLES')} class="dropdown-item" href="#">SINGLES</Link>
      </div>
    </li>
      <li class="nav-item">
        <Link to='/' onClick={(e) => this.props.categoryAction('INPO')}  id="blackitem" class="nav-link itemborder" href="#">IN NO PARTICULAR ORDER<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item dropdown">
        <a id="blackitem" class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          BLOG
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to='/' onClick={(e) => this.props.categoryAction('FEST')} id="blackitem" class="dropdown-item" >FESTIVAL GUIDES</Link>
          <Link to='/' onClick={(e) => this.props.categoryAction('CGAL')} id="blackitem" class="dropdown-item" >CONCERT GALLERY</Link>
        </div>
      </li>
      <li class="nav-item">
        <a id="blackitem" class="nav-link itemborder" href="https://open.spotify.com/user/dustyorgan?si=kTL-cmS9RdeBDclI1CAYrA">SPOTIFY</a>
      </li>
    </ul>
    <div id="goright">
    <form  class="form-inline my-2 my-lg-0">
    <input onChange={(e) => this.props.goSearch(e.target.value)} value={this.props.search} class="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>
  </div>
  </div>
</nav>
</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.category.search
  }
}

export default connect(mapStateToProps, {categoryAction, goSearch})(Header)
