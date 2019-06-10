import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import Search from './comps/Search'
import Posts from './comps/Posts'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {Nav} from 'react-bootstrap'
class Login extends React.Component{
	render(){
		return(
			<div>
				<Header></Header>
				<MDBContainer style={{position:"relative", top:'100px'}}>
        		<p className="text-center mb-4 mt-5" style={{fontSize:'30px'}}> <strong>Forum</strong></p>
				<MDBBtn
                  gradient = 'purple'
                  type="button"
                  className="white-text"
                > Create post </MDBBtn>

                
                <Nav fill variant="tabs" defaultActiveKey="/forum">
  	<Nav.Item>
    <Nav.Link href="/forum">All</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Link-1">New Findings</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Link-2">Social Activities</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Link-3">Shared Experience and Ideas</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Link-4">Polls</Nav.Link>
  </Nav.Item>
</Nav>

<Posts></Posts>

        		</MDBContainer>
			<div style={{position: 'relative', top:'300px', width:"100%"}}>
    			<Footer></Footer>
    		</div>
    		</div>
			)
	}
}
export default Login