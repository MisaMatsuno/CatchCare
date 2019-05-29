import React from 'react';
import {withRouter} from 'react-router-dom'
import history from '../../history.js'
import {
MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol
} from "mdbreact";

class Header extends React.Component {
 
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	state = {
  	isOpen: false
	};

  handleSubmit(e) {
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
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/forum">Forum</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" onSubmit={this.handleSubmit} placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/login">My Account</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Cart</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
      
    )
  }
}
export default withRouter(Header);