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

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.prop.history.push("/products/1")
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
            <a href="/products/1">
            <MDBCardImage
              cascade
              src="https://img.alicdn.com/imgextra/i1/509554376/O1CN01zXorDP1iCFgoaomIz_!!509554376.jpg_430x430q90.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
              className = 'img-fluid'
            /></a>
            <MDBCardBody cascade className="text-center">
              <a href="/products/1" className="grey-text">
                <h5>Crutch</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="/products/1">Double Crutch</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating list-group list-unstyled justify-content-center list-group-horizontal">
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
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>49$</strong>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shoes</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">High heels</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating list-group list-unstyled justify-content-center list-group-horizontal">
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
                  <MDBIcon icon="star" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>89$</strong>
                </span>
              
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Brown coat</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating list-group list-unstyled justify-content-center list-group-horizontal">
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
                  <MDBIcon far icon="star-half" />
                </li>
              </ul>
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>59$</strong>
                </span>

              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Blouses</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Shirt</a>
                </strong>
              </MDBCardTitle>
              <ul className="rating list-group list-unstyled justify-content-center list-group-horizontal">
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
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  <strong>119$</strong>
                </span>
              </MDBCardFooter>
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