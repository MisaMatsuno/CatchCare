import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Personal extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.id)
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
      <MDBListGroupItem hover href="/myaccount/1/personalinfo">Personal Info</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Order</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Favourites</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Settings</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Payment</MDBListGroupItem>
      <MDBListGroupItem hover href="#">Security</MDBListGroupItem>
    </MDBListGroup>
  </MDBCard>
      </MDBCol>
      </MDBRow>
    	</MDBContainer>

    	
	</div>
    )
  }
}
export default Personal