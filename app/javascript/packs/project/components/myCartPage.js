import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBFormInline,MDBInput, MDBBtnGroup, MDBIcon, MDBCol, MDBRow, MDBNavLink } from 'mdbreact';
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
'mdbreact';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Mycart extends React.Component {

	constructor(props) {
	
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            cart: '',
            total_cost: '0'
        }

	}

    componentDidMount() {
        fetch('/cart/' + this.props.match.params.id, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET',
                'Content-Type': 'application/json'
            }
        }).then(res => 
            res.json())
                .then(data => {
                    console.log(data)
                    if(data.length > 0) {
                        var tmp = [];
                        for(var i = 0; i < data.length; i++) {
                            var product = {
                                id: data[i].id,
                                name: data[i].name,
                                category: data[i].category,
                                price: data[i].price,
                                quantity: data[i].quantity
                            }
                            tmp.push(product)
                        }
                        this.setState({cart: tmp});
                        var cost = 0
                        for(var i = 0; i < this.state.cart.length; i++) {
                            cost += parseInt(this.state.cart[i].price) * parseInt(this.state.cart[i].quantity)
                        }
                        this.setState({total_cost: String(cost)})
                    }
                })

    }
	
	handleSubmit(e) {

		e.preventDefault()

	}
	
	handleChange(e) {

    } 

    handleClick(e) {

        if(e.target.id === 'redirect') {
            this.props.history.push('/')
        }
        else if(e.target.id === 'remove') {
            console.log(this.state.cart[e.target.value].id)
            fetch('/cart/' + this.state.cart[e.target.value].id, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, DELETE',
                    'Content-Type': 'application/json'
                }
            }).then(res => 
                res.json())
                    .then(data => {
                        if(data.state ==='OK'){
                            alert(data.message)
                        }
                        else{
                            alert(data.message)
                        }
                    })
    
        }

    }

    render() {

        if(this.state.cart === null || this.state.cart.length == 0) {
            return(
                <div className = 'App'>
                    <Header></Header>
                    <MDBContainer style = {{position:'relative', top:'200px'}}>
                        <MDBRow className = 'justify-content-center'>
                            <MDBCol md = '8'>
                                <p className = 'text-center mb-4 mt-0' style = {{fontSize: '30px'}}> 
                                    Your Shopping Cart is empty. 
                                </p>
                                <p className = 'text-center mb-4 mt-0' style = {{fontSize: '15px'}}> 
                                    Continue Shopping on the CatchCare homepage, learn about today's deals. 
                                </p>
                                <div className = 'text-center mb-4 mt-5'>
                                    <MDBBtn id='redirect' color = 'purple' onClick={this.handleClick} type = 'submit' className = 'btn-block z-depth-2 white-text'>
                                         Continue Shopping
                                    </MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
        )}
        else {
            return(
                <div name = 'App'>
                    <Header></Header>
                    <MDBContainer style = {{position:'relative', top:'200px'}}>
                        <MDBRow className = 'justify-content-center'>
                            <p className = 'text-center mb-4 mt-0' style = {{fontSize: '30px'}}> 
                                Your Cart
                            </p>
                        </MDBRow>
                        <MDBTable hover>
                            <MDBTableHead>
                            <tr>
                            <th>#</th>
                            <th>Products</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>

                            {this.state.cart && this.state.cart.map((product, index) => {
                                const name = product.name
                                const category = product.category
                                const price = product.price
                                const quantity = product.quantity

                                return (
                                    
                                        <tr key = { index }>
                                            <td>{ index + 1 }</td>
                                            <td>{ name }</td>
                                            <td>{ category }</td>
                                            <td>{ price }$</td>
                                            <td>{ quantity }</td>
                                            <td>
                                                <MDBBtn onClick = { this.handleClick } className = 'white-text' color = 'purple' id = 'remove' value = {index}>Remove</MDBBtn>
                                            </td>
                                        </tr>
                                
                                );
                            })}

                            </MDBTableBody>
                        </MDBTable>
                        <MDBRow className = 'justify-content-center'>
                            <p className = 'text-center mb-4 mt-0' style = {{fontSize: '30px'}}> 
                                Total Cost: {this.state.total_cost}$
                            </p>
                        </MDBRow>
                        <MDBRow className = 'dflex justify-content-right'>
                            <MDBBtn className = 'white-text' color = 'purple'>Proceed to checkout</MDBBtn>
                        </MDBRow>
                    </MDBContainer>
                </div>
                )
        }
    }
}
export default Mycart