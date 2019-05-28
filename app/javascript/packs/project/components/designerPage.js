import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBCard, MDBCardBody, MDBBtn, MDBContainer, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import {Nav} from 'react-bootstrap'
class Login extends React.Component{
	render(){
		return(
			<div>
				<Header></Header>
				<MDBContainer style={{position:"relative", top:'100px'}}>
        <MDBRow>
      <MDBCol md = '4'>
        <MDBCard>
          <MDBCardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight"
            hover waves alt="MDBCard image cap" />
          <MDBCardBody>
            <MDBCardTitle>Trending & Needs</MDBCardTitle>
            <hr />
            <MDBCardText>
              See what's popular among users!<br />
              <br />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md = '4'>
        <MDBCard>
          <MDBCardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight"
            hover waves alt="MDBCard image cap" />
          <MDBCardBody>
            <MDBCardTitle>Design Your Product</MDBCardTitle>
            <hr />
            <MDBCardText>
              Upload your design<br />
              Make the first step towards your product
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md = '4'>
        <MDBCard>
          <MDBCardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight"
            hover waves alt="MDBCard image cap" />
          <MDBCardBody>
            <MDBCardTitle>Design Challenges</MDBCardTitle>
            <hr />
            <MDBCardText>
              Information about the latest design challenges<br />
              <br />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <p className="text-center mb-4 mt-5" style={{fontSize:'20px'}}>Unlock the following exciting functions by going premium!
    </p>



    <MDBRow>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage: "url'https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Prototype Testing</strong>
              </MDBCardTitle>
              <p>
                Get a 3D printed prototype for your design
              </p>
              <MDBBtn color="pink">
                <MDBIcon icon="clone left" /> Go Premium
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Manufacturing</strong>
              </MDBCardTitle>
              <p>
                We assist you build your design in the real world
              </p>
              <MDBBtn color="deep-orange">
                <MDBIcon icon="clone left" /> Go premium
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Distribution Channel</strong>
              </MDBCardTitle>
              <p>
                Have a chance to commercialize your product
              </p>
              <MDBBtn color="deep-orange">
                <MDBIcon icon="clone left" /> Go premium
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
        		</MDBContainer>
			<div style={{position: 'relative', top:'300px', width:"100%"}}>
    			<Footer></Footer>
    		</div>
    		</div>
			)
	}
}
export default Login