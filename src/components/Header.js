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
        <h2 class='title' ><Link onClick={(e) => e.stopPropagation()} to={`/`} id='hovermore'>DUSTY ORGAN</Link></h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              {this.makedate()}
            </div>
            <div class="col-sm">

            </div>
            <div class="col-sm right">
              <a href="#" id='greything' class="fa fa-facebook margina"></a>
              <a href="#" id='greything' class="fa fa-twitter margina"></a>
              <a href="#" id='greything' class="fa fa-instagram margina"></a>
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
        <a id="blackitem" class="dropdown-item" href="#">ALBUM</a>
        <a id="blackitem" class="dropdown-item" href="#">SINGLES</a>
        <Link to='/Reviews' id="blackitem" onClick={(e) => this.props.categoryAction('REVIEW')} class="dropdown-item" href="#">REVIEWS</Link>
        <a id="blackitem" class="dropdown-item" href="#">WEEK OF</a>
        <a id="blackitem" class="dropdown-item" href="#">EPS</a>
      </div>
    </li>
      <li class="nav-item">
        <Link onClick={(e) => this.props.categoryAction('INPO')} to='/In_No_Particular_Order' id="blackitem" class="nav-link itemborder" href="#">IN NO PARTICULAR ORDER<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item dropdown">
        <a id="blackitem" class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          BLOG
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to='/Festival_Guides'onClick={(e) => this.props.categoryAction('FEST')} id="blackitem" class="dropdown-item" href="#">FESTIVAL GUIDES</Link>
          <a id="blackitem" class="dropdown-item" href="#">CONCERT GALLERY</a>
          <a id="blackitem" class="dropdown-item" href="#">INTERVIEWS</a>
          <a id="blackitem" class="dropdown-item" href="#">CONTESTS</a>
        </div>
      </li>
      <li class="nav-item">
        <a id="blackitem" class="nav-link itemborder" href="#">PLAYLISTS</a>
      </li>
      <li class="nav-item">
        <a id="blackitem" class="nav-link " href="#">PODCAST</a>
      </li>
      <form class="form-inline my-2 my-lg-0 goright">
      <input onChange={(e) => this.props.goSearch(e.target.value)} value={this.props.search} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    </ul>
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
