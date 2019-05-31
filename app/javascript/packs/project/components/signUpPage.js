import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class Signup extends React.Component{

  state = {

    type: 'user',
    name: null,
    username: null,
    password: null,
    create: null

  }

  constructor(props){

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){

    if(e.target.id === 'name')this.setState({name:e.target.value});
    if(e.target.id === 'email')this.setState({username:e.target.value});
    if(e.target.id === 'password')this.setState({password:e.target.value});
    if(e.target.id === 'user' || e.target.id === 'designer'){
      var button1 = document.getElementById('user');
      var button2 = document.getElementById('designer')
      var button = e.target.id==='user'? 0:1
      if(button == 0){
        this.setState({type:'user'})
        button1.className = 'btn btn-block Ripple-parent btn-lg btn-purple z-depth-1 white-text'
        button2.className = 'btn btn-block Ripple-parent btn-outline-purple z-depth-1 white-text'
      }
      else{
        this.setState({type:'designer'})
        button2.className = 'btn btn-block Ripple-parent btn-lg btn-purple z-depth-1 white-text'
        button1.className = 'btn btn-block Ripple-parent btn-outline-purple z-depth-1 white-text'
      }

      var form = document.getElementById('form');
      form.style.visibility = 'visible';
    }

  }

  handleSubmit(e){

    fetch('/myaccount', {
      method: 'POST',
      body: JSON.stringify({name: this.state.name, username: this.state.username, password: this.state.password}),
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET',
          "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => alert(data.name))
      .then(this.props.history.push('/login'))

  }

	render(){

		return(
			<div>
				<Header></Header>

			  <MDBContainer style = {{position: 'relative', top:'100px', left:"20px", width:'100%'}}>
          <MDBRow className = 'justify-content-center'>
          <MDBCol md = "5">
          <p className = "text-center mb-4 mt-0" fontSize = '15' style = {{fontSize:'30px'}}> I want a new account </p>
          <div style = {{height:'100px'}}>
            <MDBRow>
            <MDBCol md = '6'>
            <MDBBtn id = 'user'
                    color = 'purple'
                    type = "button"
                    outline
                    onClick = {this.handleChange}
                    className = "btn-block z-depth-1 white-text">
              User
            </MDBBtn>
            </MDBCol>
            <MDBCol md ='6'>
            <MDBBtn id = 'designer'
                    color = 'purple'
                    type = "button"
                    outline
                    onClick = {this.handleChange}
                    className = "btn-block z-depth-1 white-text">
              Designer
            </MDBBtn>
            </MDBCol>
            </MDBRow>
          </div>

          <div id = "form" style = {{visibility: "hidden"}}>
            <form onSubmit = {(event) => this.handleSubmit(event)}>
              <label htmlFor = "defaultFormRegisterNameEx" className = "grey-text">
                Your name
              </label>
              <input
                id = 'name'
                type = "text"
                onChange = {this.handleChange}
                className = "form-control"/>
              <br />
              <label htmlFor = "defaultFormRegisterEmailEx" className = "grey-text">
                Your email
              </label>
              <input
                id = 'email'
                type = "email"
                onChange = {this.handleChange}
                className = "form-control"/>
              <br />
              <label
                htmlFor = "defaultFormRegisterConfirmEx"
                className = "grey-text">
                Confirm your email
              </label>
              <input
                id = 'confirm'
                type = "email"
                id = "defaultFormRegisterConfirmEx"
                className = "form-control"/>
              <br />
              <label
                htmlFor = "defaultFormRegisterPasswordEx"
                className = "grey-text">
                Your password
              </label>
              <input
                id = 'password'
                type = "password"
                onChange = {this.handleChange}
                className = "form-control"/>
              <div className = "text-center mb-4 mt-5">
                <MDBBtn
                  color = 'purple'
                  type = "submit"
                  className = "btn-block z-depth-2 white-text">
                  Create Account
                </MDBBtn>
              </div>
            </form>

            <p className="font-small grey-text d-flex justify-content-center">
              Already have an account?
            <a
              href="/login"
              className="dark-grey-text font-weight-bold ml-1">
              Log in
            </a>
            </p>

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
export default Signup