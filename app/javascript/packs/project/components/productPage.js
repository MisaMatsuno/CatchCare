import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import { MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import {Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'

class Product extends React.Component {
  state = {
    img: '1'
  }

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    var src = document.getElementById('1').src
    this.setState({img:src})
  }

  handleClick(e){
    
  }


  render() {
    const imageClick = () => {
          this.setState({img:event.target.src})
        } 
    return(
      <div className = "App">
        <Header></Header>
        <MDBContainer fluid style={{position: 'relative', top:'100px', left:"40px", width:'100%'}}> 
        <MDBRow>
        <MDBCol style = {{position:'relative', top:'50px'}} col = '4'>
    	    <div className = 'col-md-8 mb-3'>
            <img src={this.state.img} className="img-fluid z-depth-1" alt="Responsive image"/>
          </div>

          <div className='row'>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img id = '1' onClick ={(event) => imageClick(event)} src="https://img.alicdn.com/imgextra/i1/509554376/O1CN01zXorDP1iCFgoaomIz_!!509554376.jpg_430x430q90.jpg" className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src="https://img.alicdn.com/imgextra/i1/509554376/O1CN01ZaWj9m1iCFi9L5ZSq_!!0-item_pic.jpg_430x430q90.jpg" className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src="https://img.alicdn.com/imgextra/i3/509554376/O1CN01fhgVb81iCFhbPxwJD_!!509554376.jpg_430x430q90.jpg" className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src="https://img.alicdn.com/imgextra/i1/509554376/O1CN01FYQ0uM1iCFhKxDZJb_!!509554376.jpg_430x430q90.jpg" className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
          </div>
        </MDBCol>
        <MDBCol>
          
          <div className = 'col-lg-8 col-md-8 col-sm-12'>
          
          <p className = "text-center mb-2 mt-0 font-weight-bold" fontSize = '15' style = {{fontSize:'30px'}}> Double Crutch </p>
          
          
          <MDBListGroup>
            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>
              <span className="float-left" style = {{fontSize:'40px'}}>
                price: 
              </span>
              <span className="float-left font-weight-bold" style = {{fontSize:'40px', color:'purple'}}>
               <strong>20$</strong>
              </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Shipping From
                    <span className="float-left font-weight-bold" style = {{fontSize:'20px', color:'purple'}}>
                      Beijing
                    </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Shipping To
                    <span className="float-left font-weight-bold" style = {{fontSize:'20px', color:'purple'}}>
                      United States
                    </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Rating
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
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Monthly Selling
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      6
                    </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Reviews
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      145
                    </span>
            </MDBListGroupItem>
            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>In Stock
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      4199
                    </span>
            </MDBListGroupItem>
             <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Category
                    <select style= {{width:"50%"}}className="browser-default custom-select">
                      <option>Choose your option</option>
                      <option value="1">Diamond Black</option>
                      <option value="2">Wine Red</option>
                      <option value="3">Four feet</option>
                    </select>
                    
            </MDBListGroupItem>
             <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Quantity
                   
                    <input placeholder = '0' style ={{width:"10%"}} className="quantity" name="quantity" onChange={()=> console.log('change')}
                    type="number" />                    
                               
            </MDBListGroupItem>
                  
                </MDBListGroup>
          
           <MDBRow>
          <MDBCol md = '6' className="d-flex justify-content-center">
            <MDBBtn className='white-text' color="purple">
              Add to Cart
            </MDBBtn>
          </MDBCol>
          <MDBCol md = '6' className="d-flex justify-content-center">
            <MDBBtn className='white-text' color="purple">
              Buy Now
            </MDBBtn>
          </MDBCol>
        </MDBRow>
          </div>
        </MDBCol>
       
        </MDBRow> 

        


        </MDBContainer>
        <div style = {{position:'relative', top:'100px', left:"50px"}}>
        <Tabs defaultActiveKey="detail" id="detail-tab">
          <Tab eventKey="detail" title="Product Details">

          </Tab>
          <Tab eventKey="review" title="Reviews">
          </Tab>
        </Tabs>
        </div>
    	<div style={{position: 'relative', top:'300px', width:"100%"}}>
    	<Footer></Footer>
    	</div>
	</div>
    )
  }
}
export default Product