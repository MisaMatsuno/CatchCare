import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import CarouselPage from './comps/Carousal'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBNavItem, MDBFormInline } from
"mdbreact";

class LandingPage extends React.Component {

	state = {
		query: null
	}
	
	constructor(props) {
	
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	
	}
	
	handleSubmit(e) {

		e.preventDefault()
		var data = JSON.stringify({
			query: this.state.query
		})
		//console.log(this.props.location.pathname)
		this.props.history.push('/solution')

	}
	
	handleChange(e) {

		this.setState({query: e.target.value})

	} 

  render() {

    return(
      <div className = "App">
        <Header></Header>
        <MDBContainer fluid style={{position: 'relative', top:'60px', left:"20px", width:'100%'}}>   
					<MDBRow className = "justify-content-center">
						<MDBCol md = '6' className = "mb-xl-0 mb-0">
							<form onSubmit = {(event) => this.handleSubmit(event)}>
								<div className="input-group md-form form-sm form-2 pl-0">
  								<input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" onChange = {this.handleChange} className = "form-control"/>
  								<div className="input-group-append">
										<MDBBtn type = "submit" className = "input-group-text red lighten-3" id="basic-text1">
											<i className="fas fa-search text-grey" aria-hidden="true"></i>
                		</MDBBtn>
  								</div>
								</div>
							</form>
						</MDBCol>
					</MDBRow>   
					<br></br>
    			<MDBRow>
    				<MDBCol md = '2' className = "mb-xl-0 mb-4">
    					<MDBBtnGroup vertical>
        				<MDBBtn gradient="peach" size = 'lg' className="ml-0 white-text font-weight-bold">Food</MDBBtn>
        				<MDBBtn gradient="purple" size = 'lg' className='white-text font-weight-bold' style={{position: 'relative', top:'20px'}}>Clothing</MDBBtn>
        				<MDBBtn gradient="blue" size = 'lg' className='white-text font-weight-bold' style={{position: 'relative', top:'40px'}}>Shelter</MDBBtn>
        				<MDBBtn gradient="aqua" size = 'lg' className='white-text font-weight-bold' style={{position: 'relative', top:'60px'}}>Tranportation</MDBBtn>
      				</MDBBtnGroup>
    				</MDBCol>
    				<MDBCol md = '9'lg = '9' sm='8' className = "mb-xl-0 mb-4">
    					<CarouselPage></CarouselPage>
    				</MDBCol>
    			</MDBRow>
    		</MDBContainer>

    		<MDBContainer fluid style={{position: 'relative', top:'200px', width:'100%'}} className="text-center">
    			<MDBRow>
          	<MDBCol md="12">
            	<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              	Forum
            	</h5>
            	<MDBBtn gradient="peach" size = 'lg' className="ml-0" href='/forum'>Click and go to forum!</MDBBtn>
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
export default LandingPage