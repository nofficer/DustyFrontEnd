import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Landing from './Landing'
import LandingCat from './LandingCat'
import Header from './Header'
import ArticleShow from './ArticleShow'


const App = () => {
  return (
    <div>

      <Router history={history}>
        <div className='container'>
        <Header />
        <div className='container2'>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/article/:id' exact component={ArticleShow} />
            <Route path='/:category' exact component={LandingCat} />

          </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
