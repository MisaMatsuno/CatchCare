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
import MyCart from './components/myCartPage'
import Product from './components/productPage'
import NewPost from './components/newPostPage'
import PostDetail from './components/postDetailPage'

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
      <Route exact path='/cart/:id/mycart' component={MyCart} /> 
      <Route exact path='/products/:id/detail' component={Product} /> 
      <Route exact path='/forum/new' component={NewPost} />
      <Route exact path='/forum/:id/postdetail' component={PostDetail} />
    </div>
  </Router>
)
export default App;