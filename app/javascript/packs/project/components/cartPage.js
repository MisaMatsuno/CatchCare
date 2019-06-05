import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBFormInline,MDBInput, MDBBtnGroup, MDBIcon, MDBCol, MDBRow, MDBNavLink } from "mdbreact";
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Cart extends React.Component {
    state = {
        
	}
	
	constructor(props) {
	
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	
	}
	
	handleSubmit(e) {

		e.preventDefault()

	}
	
	handleChange(e) {

    } 
    
    render() {
        return(
            <div className = "App">
                <Header></Header>
                <MDBContainer style={{position:"relative", top:'200px'}}>
                    <MDBRow className = "justify-content-center">
                        <MDBCol md = "8">
                            <p className = "text-center mb-4 mt-0" style = {{fontSize: "30px"}}> 
                                Your Shopping Cart is empty. 
                            </p>
                            <p className = "text-center mb-4 mt-0" style = {{fontSize: "15px"}}> 
                                Continue Shopping on the CatchCare homepage, learn about today's deals. 
                            </p>
                            <div className = "text-center mb-4 mt-5">
                                <MDBBtn color = "purple" type = "submit" className = "btn-block z-depth-2 white-text">
                                    <a href="/"> Continue Shopping </a>
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    <br></br>

                    <MDBRow className = "justify-content-center">
                        
                        <MDBCol md = "8">
                            <div className = "text-center mb-4 mt-5">
                                <MDBBtn color = "purple" type = "submit" className = "btn-block z-depth-2 white-text">
                                    <a href="/"> Proceed to checkout </a>
                                </MDBBtn>
                            </div> 
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default Cart