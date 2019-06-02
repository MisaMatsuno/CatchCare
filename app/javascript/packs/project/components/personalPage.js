import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBFormInline,MDBInput, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Personal extends React.Component {
  state = {
    name: '',
    email: '',
    radio: ""
  }
  constructor(props){
    super(props);
    console.log(this.props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    fetch('/myaccount/'+this.props.match.params.id, {
      method: 'GET',
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET',
          "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
          if(data==null){
            alert("no name")
          }
          else{
            console.log(data.username)
            this.setState({name:data.name})
            this.setState({email:data.username})
          }
      })
  }

  onClick = nr => () => {
  this.setState({
    radio: nr
  });
  }

  handleChange(e){

  }
  handleClick(e){
    if(e.target.id==='p1'){
      var form = document.getElementById('personalform');
      form.style.visibility = form.style.visibility === 'visible'? 'hidden' : 'visible';
    }
  }
  render() {
    return(
      <div className = "App">
        <Header></Header>
        <MDBContainer fluid style={{position: 'relative', top:'100px', left:"20px", width:'100%'}}>   
      <div className= 'text-center align-middle' style={{backgroundColor: "#6351ce",height:'90px', width:'200px'}}>
       <p className="text-center white-text mb-4 mt-5"  style={{position: 'relative', top:'30%',fontSize:'20px'}}> My Account</p>
      </div>
      <MDBRow>
      <MDBCol md='3'>
      <MDBCard style={{ width: "200px", marginTop: "1rem", backgroundColor: "#6351ce" }}>
    <MDBListGroup>
      <MDBListGroupItem hover href="/designer">Designer's Tab</MDBListGroupItem>
      <MDBListGroupItem hover id = 'p1' onClick = {this.handleClick}>Personal Info</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Order</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Favourites</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Settings</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Payment</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Security</MDBListGroupItem>
    </MDBListGroup>
  </MDBCard>

  
      </MDBCol>
      <MDBCol  id = 'personalform' style={{visibility:'hidden'}} md='6'>
      <MDBCard style={{marginTop: "1rem",}}>
      <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">Name 
      <input className="form-control" style = {{width:"600px"}} onChange = {this.handleChange} value = {this.state.name}/> </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Email <input className="form-control" style = {{width:"600px"}} onChange = {this.handleChange} value = {this.state.email}/></MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Birth<input placeholder= "MM/DD/YYYY" className="form-control" style = {{width:"600px"}}/></MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Phone<input placeholder= "(XXX)XXX-XXXX" className="form-control" style = {{width:"600px"}}/></MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Gender
      <MDBFormInline>
        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Male" type="radio" id="radio1" />
        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Female" type="radio" id="radio2" />
      </MDBFormInline></MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Interest Areas<input className="form-control" style = {{width:"600px"}}/></MDBListGroupItem>
    </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>

      
  </div>
    )
  }
}
export default Personal