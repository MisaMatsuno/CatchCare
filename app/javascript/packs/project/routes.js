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
import Signup from './components/signUpPage'
import Cart from './components/cartPage'
import myCart from './components/myCartPage'
import Product from './components/productPage'
import NewPost from './components/newPostPage'

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/forum' component={Forum} />
      <Route exact path='/solution' component={Solution} />
      <Route exact path='/solution?queryKey=queryVal' component={Solution} />
      <Route exact path='/designer' component={Designer} />
      <Route exact path='/myaccount/:id/personal' component={Personal} />
      <Route exact path='/myaccount/new' component={Signup} />
      <Route exact path='/cart' component={Cart} /> 
      <Route exact path='/cart/:id/mycart' component={myCart} /> 
      <Route exact path='/products/:id/detail' component={Product} /> 
      <Route exact path='/forum/new' component={NewPost} />

    </div>
  </Router>
)
export default App;