import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class Login extends React.Component{

  state = {
    username: null,
    password: null,

  }

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if(e.target.id === 'username')this.setState({username:e.target.value});
    if(e.target.id === 'password')this.setState({password:e.target.value});
  }

  handleSubmit(e){
      this.props.history.push('/myaccount');
  }





	render(){
		return(
			<div>
				<Header></Header>

			<MDBContainer style={{position: 'relative', top:'100px', left:"20px", width:'100%'}}>
      <MDBRow className='justify-content-center'>
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
              <MDBInput id='username' label="User ID" group type="text" validate />
              <MDBInput
                id = 'password'
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
                  href="/myaccount/new"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            </MDBCardBody>
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