import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import { MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import {Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'

class Product extends React.Component {
  state = {

    id: '',
    name: '',
    detail: '',
    category: [],
    image: [],
    price: '',
    rating: '',
    manufacturer: '',
    monthly_sales: '', 
    review: '',
    in_stock: '',
    kind: ''

  }

  constructor(props){

    super(props)
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount(){
  
    fetch('/products/' + this.props.match.params.id, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET',
        "Content-Type": "application/json"
      }
    }).then(res => 
        res.json())
        .then(data => {
          this.setState({id: data.id})
          this.setState({name: data.name})
          this.setState({detail: data.detail})
          var cur = data.category.split("%")
          this.setState({category: cur})
          var tmp = data.image.split(" ")
          this.setState({image: tmp})
          this.setState({price: data.price})
          this.setState({rating: data.rating})
          this.setState({manufacturer: data.manufacturer})
          this.setState({monthly_sales: data.monthly_sales})
          this.setState({review: data.review})
          this.setState({in_stock: data.in_stock})
          this.setState({kind: data.kind})
          console.log(this.state)
      })

  }

  handleClick(e){

    if(e.target.id==='cart'){
      alert("Successfully added to your cart!")
      localStorage.setItem('cart','1')
    }
    
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
              <img id = '1' onClick ={(event) => imageClick(event)} src={ this.state.image[0] } className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src={ this.state.image[1] } className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src={ this.state.image[2] } className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 mb-2 waves-effect hoverable">
              <img onClick ={(event) => imageClick(event)} src={ this.state.image[3] } className="img-fluid z-depth-1" alt="Responsive image"/>
            </div>
          </div>
        </MDBCol>
        <MDBCol>
          
          <div className = 'col-lg-8 col-md-8 col-sm-12'>
          
          <p className = "text-center mb-2 mt-0 font-weight-bold" fontSize = '15' style = {{fontSize:'30px'}}> { this.state.name } </p>
          
          
          <MDBListGroup>
            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>
              <span className="float-left" style = {{fontSize:'40px'}}>
                price: 
              </span>
              <span className="float-left font-weight-bold" style = {{fontSize:'40px', color:'purple'}}>
               <strong> {this.state.price}$ </strong>
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

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Manufacturer
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      { this.state.manufacturer }
                    </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Monthly Sales
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      { this.state.monthly_sales }
                    </span>
            </MDBListGroupItem>

            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Reviews
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      { this.state.review }
                    </span>
            </MDBListGroupItem>
            <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>In Stock
                    <span className="float-left" style = {{fontSize:'20px', color:'purple'}}>
                      { this.state.in_stock }
                    </span>
            </MDBListGroupItem>
             <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Category
                    <select style= {{width:"50%"}}className="browser-default custom-select">
                      <option>Choose your option</option>
                      <option value="1"> { this.state.category[0] } </option>
                      <option value="2"> { this.state.category[1] } </option>
                      <option value="3"> { this.state.category[2] } </option>
                    </select>
                    
            </MDBListGroupItem>
             <MDBListGroupItem className=" d-flex justify-content-between align-items-center" hover>Quantity
                   
                    <input placeholder = '0' style ={{width:"10%"}} className="quantity" name="quantity" onChange={()=> console.log('change')}
                    type="number" />                    
                               
            </MDBListGroupItem>
                  
                </MDBListGroup>
          
           <MDBRow>
          <MDBCol md = '6' className="d-flex justify-content-center">
            <MDBBtn id = 'cart' onClick={this.handleClick} className='white-text' color="purple">
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