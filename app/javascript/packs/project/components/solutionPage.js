import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import Header from './comps/Header'
import Footer from './comps/Footer'
import Search from './comps/Search'
import queryString from 'query-string'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from 'mdbreact';
import {Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class Solution extends React.Component{

  state = {

    activeItemPills: '1',
    products: [],
    tips: []
  }

  constructor(props){

    super(props)
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){

    this.prop.history.push('/products/1')

  }


  togglePills = tab => () => {

    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }

  }


  componentDidMount() {

    fetch('/solution', {
      method: 'POST',
      body: JSON.stringify({kind: queryString.parse(this.props.location.search).queryKey}),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET',
        'Content-Type': 'application/json'
      }
    }).then(res => 
        res.json())
        .then(data => {
          var tmp = [];
          for(var i = 0; i < data.length; i++) {
            var product = {
              id: data[i].id,
              name: data[i].name,
              detail: data[i].detail,
              category: data[i].category,
              image: data[i].image,
              price: data[i].price,
              rating: data[i].rating
            }
            tmp.push(product)
          }
          this.setState({products: tmp});
          //console.log(this.state)
      })
    
    fetch('/tips', {
      method: 'POST',
      body: JSON.stringify({message: queryString.parse(this.props.location.search).queryKey}),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET',
        'Content-Type': 'application/json'
      }
    }).then(res => 
        res.json())
        .then(data => {
          var tmp = []
          for(var i = 0; i < data.length; i++) {
            var tip = {
              id: data[i].id,
              message: data[i].message,
              rating: data[i].rating
            }
            tmp.push(tip)
          }
          this.setState({tips: tmp});
          //console.log(this.state.tips)
        })

  }

	render(){

		return(
			<div>
				<Header></Header>
        <MDBContainer style = {{position:'relative', top:'200px'}}>
          <p> Search Result for { queryString.parse(this.props.location.search).queryKey } :</p>
          <Tabs defaultActiveKey = 'product' id = 'solution-tab'>
            <Tab eventKey = 'product' title = 'Products'>
            <MDBRow>
              {this.state.products && this.state.products.map((product, index) => {
                const photo = product.image.split(' ')[0]
                const id = product.id
                return (
                  <MDBCol lg = '5' md = '5' className = 'mb-lg-0 mb-4' key = {index}>
                    <MDBCard cascade narrow ecommerce>
                      <a href = {'/products/' + product.id + '/detail'}>
                        <MDBCardImage
                          cascade
                          src = { photo }
                          top
                          alt = 'sample photo'
                          overlay = 'white-slight'
                          className = 'img-fluid'
                        />
                      </a>
                      <MDBCardBody cascade className = 'text-center'>
                        <a href = {'/products/' + product.id + '/detail'} className = 'grey-text'>
                          <h5>{ product.kind }</h5>
                        </a>
                        <MDBCardTitle>
                          <strong>
                            <a href = {'/products/' + product.id + '/detail'}>{ product.name }</a>
                          </strong>
                        </MDBCardTitle>
                        <ul className = 'rating list-group list-unstyled justify-content-center list-group-horizontal'>
                          <StarRatingComponent name = 'rate' starCount = { 5 } value = { parseFloat(product.rating) }/>
                        </ul>
                        <MDBCardText>
                          { product.detail }
                        </MDBCardText>
                        <MDBCardFooter className = 'px-1'>
                          <span className = 'float-left font-weight-bold'>
                            <strong>{ product.price }$</strong>
                         </span>
                        </MDBCardFooter>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })}
            </MDBRow>
            </Tab>
            <Tab eventKey = 'tips' title = 'Tips'>
              <MDBContainer style = {{position:'relative', top:'10px'}}>
                <MDBTable hover>
                  <MDBTableHead>
                    <tr>
                    <th>#</th>
                    <th>Tips</th>
                    <th>Rating</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.tips && this.state.tips.map((tip, index) => {
                      return (              
                        <tr key = {index}>
                          <td>{ index + 1 }</td>
                          <td>{ tip.message }</td>
                          <td><StarRatingComponent name = 'rate' starCount = { 5 } value = { parseFloat(tip.rating) }/></td>
                        </tr>        
                      );
                    })} 
                  </MDBTableBody>
                </MDBTable>
              </MDBContainer>
            </Tab>
            <Tab eventKey = 'designs' title = 'Designs'>
              <Search></Search>
            </Tab>
          </Tabs>
	      </MDBContainer>
			  <div style = {{position: 'relative', top:'500px', width:'100%'}}>
    			<Footer></Footer>
    		</div>
    	</div>
    )
    
	}
}
export default Solution