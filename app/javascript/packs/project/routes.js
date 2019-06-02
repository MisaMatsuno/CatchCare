import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import LandingPage from './components/landingPage';
import Login from './components/loginPage'
import Solution from './components/solutionPage'
import Forum from './components/forumPage'
import Designer from './components/designerPage'
import Personal from './components/personalPage'
import Personalinfo from './components/personalinfoPage'
import Signup from './components/signUpPage'

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/solution' component={Solution} />
      <Route exact path='/forum' component={Forum} />
      <Route exact path='/designer' component={Designer} />
      <Route exact path='/myaccount/1/personalinfo' component={Personalinfo} />
      <Route path='/myaccount/:id' component={Personal} />
      <Route exact path='/myaccount/new' component={Signup}/>
    </div>
  </Router>
)
export default App;