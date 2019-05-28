import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import Search from './comps/Search'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import {Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'


class Solution extends React.Component{

  state = {
  activeItemPills: "1",
}



togglePills = tab => () => {
  if (this.state.activePills !== tab) {
  this.setState({
    activeItemPills: tab
    });
  }
}
	render(){


		return(
			<div>
				<Header></Header>
        <MDBContainer style={{position:"relative", top:'200px'}}>
        <p> Search Result for ___ :</p>
        
        <Tabs defaultActiveKey="product" id="solution-tab">
          <Tab eventKey="product" title="Product">
          <MDBRow>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Denim trousers</a>
                </strong>
              </MDBCardTitle>
              </MDBCardBody>
              </MDBCard>
              </MDBCol >
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard>
              <MDBCardBody className="text-center">
              <ul className="list-group list-group-horizontal list-unstyled">
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon icon="star" />
                </li>
                <li>
                  <MDBIcon far icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Description Description
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>49$</strong>
                </span>
                
              </MDBCardFooter>
              <div>
        <select className="browser-default custom-select">
          <option>Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <MDBBtn className='white-text' color="purple">Add to cart</MDBBtn>
        <MDBBtn className='white-text' color="purple">Buy it now</MDBBtn>
      </div>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          </MDBRow>
          </Tab>
          <Tab eventKey="tips" title="Tips">
            <Search></Search>
          </Tab>
          <Tab eventKey="designs" title="Designs">
              <Search></Search>
          </Tab>
        </Tabs>
       
	     </MDBContainer>
			<div style={{position: 'relative', top:'500px', width:"100%"}}>
    			<Footer></Footer>
    		</div>
    		</div>
			)
	}
}
export default Solution