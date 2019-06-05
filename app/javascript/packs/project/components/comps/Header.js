import React from 'react';
import {withRouter} from 'react-router-dom'
import history from '../../history.js'
import {
MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol
} from "mdbreact";

class Header extends React.Component {
 

  constructor(props) {
    
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      cart: "Cart"
    }

  }

  componentDidMount(){
    var search = document.getElementById('search');
    if(this.props.location.pathname==='/'){
      search.style.visibility='hidden';
    }
    var cart_count = localStorage.cart;
    if (cart_count!=null && cart_count!=undefined && cart_count!='0'){
      this.setState({cart:"Cart ("+cart_count+")"});
    }
    else{
      this.setState({cart:"Cart"});
    }
  }

	state = {
  	isOpen: false
	};

  handleClick(e){
    console.log(localStorage)
    if(localStorage.user==null || localStorage.user==undefined ||localStorage.user==''){
      this.props.history.push('/login');
    }
    else{
      this.props.history.push('/myaccount/'+localStorage.user+'/personal');
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/solution') 
}

	toggleCollapse = () =>{
		this.setState({isOpen:!this.state.isOpen});
	}
  render() {
    return(

    	<div className="fixed-top">
     <MDBNavbar color="purple" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Catch Globe</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            
            <MDBNavItem>
              <MDBNavLink to="/forum">Forum</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem id = 'search' style={{visibility:"visible"}}>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" onSubmit={this.handleSubmit} placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink onClick={this.handleClick} to="#!">My Account</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cart">{this.state.cart}</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
      
    )
  }
}
export default withRouter(Header);