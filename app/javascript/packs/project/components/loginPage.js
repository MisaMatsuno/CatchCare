import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class Login extends React.Component{
	render(){
		return(
			<div>
				<Header></Header>

			<MDBContainer style={{position: 'relative', top:'100px', left:"20px", width:'100%'}}>
      <MDBRow>
        <MDBCol md="5">
          <MDBCard>
            <div className="header pt-3 purple lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="white-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="User ID" group type="text" validate />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  User ID?
                </a>
              </p>
              <MDBInput
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color = 'purple'
                  type="button"
                  className="btn-block z-depth-2 white-text"
                  href = "/myaccount"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        


        <MDBCol md='2'>
        </MDBCol>



        <MDBCol md = "5">
        <p className="text-center mb-4 mt-5" fontSize='15' style={{fontSize:'30px'}}> I want a new account
        </p>
        <div style = {{height:'100px'}}>
        <MDBRow>
        <MDBCol md = '6'>
        <MDBBtn
                  color = 'purple'
                  type="button"
                  outline
                  className="btn-block z-depth-1 white-text"

                >
                  User
                </MDBBtn>
        </MDBCol>
        <MDBCol md ='6'>
        <MDBBtn
                  color = 'purple'
                  type="button"
                  outline
                  className="btn-block z-depth-1 white-text"
                >
                  Designer
                </MDBBtn>
        </MDBCol>
        </MDBRow>
        </div>
        <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color = 'purple'
                  type="button"
                  className="btn-block z-depth-2 white-text"
                >
                  Create Account
                </MDBBtn>
              </div>
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