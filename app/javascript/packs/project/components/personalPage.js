import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBFormInline,MDBInput, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Personal extends React.Component {
  state = {
    name: '',
    username: '',
    birth: '',
    phone: '',
    interest: '',
    radio: "",
    type: ""
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)  
  }

  onClick = nr => () => {
  this.setState({
    radio: nr
  });
  }

  componentDidMount(){
    fetch('/myaccount/'+this.props.match.params.id, {
      method: 'GET',
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET',
          "Content-Type": "application/json"
      }
    }).then(res => 
    //{if(res.status===404){
    //    alert("Wrong Account");
    //    this.props.history.push('/login');
    //  }
      res.json())
      .then(data => {
            console.log(data)
            this.setState({type:data.identity})
            this.setState({name:data.name})
            this.setState({username:data.username})
            this.setState({birth:data.birth===null? '':data.birth})
            this.setState({phone:data.phone===null? '':data.phone})
            this.setState({interest:data.interest===null? '':data.interest})
            this.setState({radio:data.gender===null? '':data.gender})

            if(this.state.type==="user"){
              var designTab = document.getElementById('design');
              //designTab.className = 'list-group-item disabled list-group-item-action'
              designTab.style.visibility = 'hidden'
            }
          
      })
    
    
  }

  handleChange(e){
    this.setState({[e.target.id]:e.target.value})
  }
  handleClick(e){
    if(e.target.id==='p1'){
      var form = document.getElementById('personalform');
      form.style.visibility = form.style.visibility === 'visible'? 'hidden' : 'visible';
    }
    if(e.target.id==='logout'){
      localStorage.setItem('user','');
      alert("Successfully logging out!");
      this.props.history.push('/login');
    }
  }

  handleSubmit(e){
    //e.preventDefault()
    var data = JSON.stringify({
      id: this.props.match.params.id,
      username: this.state.username,
      name: this.state.name,
      birth: this.state.birth,
      phone: this.state.phone,
      interest: this.state.interest,
      gender: this.state.radio
    })
    fetch('/myaccount/'+this.props.match.params.id, {
      method: 'PATCH',
      body: data,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET, PATCH',
          "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
        if(data.status==='OK'){
          alert(data.message);
          this.props.history.push('/myaccount/'+this.props.match.params.id)
        }
        else{
          alert(data.message);
        }
      })
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
                  <MDBListGroupItem hover id = 'design' href="/designer">Designer's Tab</MDBListGroupItem>
                  <MDBListGroupItem hover id = 'p1' onClick = {this.handleClick}>Personal Info</MDBListGroupItem>
                  <MDBListGroupItem hover href="#">Order</MDBListGroupItem>
                  <MDBListGroupItem hover href="#">Favourites</MDBListGroupItem>
                  <MDBListGroupItem hover href="#">Settings</MDBListGroupItem>
                  <MDBListGroupItem hover href="#">Payment</MDBListGroupItem>
                  <MDBListGroupItem hover href="#">Security</MDBListGroupItem>
                  <MDBListGroupItem hover id = 'logout' onClick = {this.handleClick}>Log Out</MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>

  
            </MDBCol>
            <MDBCol  id = 'personalform' style={{visibility:'hidden'}} md='6'>
              <MDBCard >
                <MDBListGroupItem hover className=" d-flex justify-content-between align-items-center">
                  Name
                  <input id = 'name' style={{width:'80%'}}className="form-control" onChange = {this.handleChange} value = {this.state.name} required/> 
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>
                  Email 
                  <input id = 'username' style={{width:'80%'}} className="form-control"  onChange = {this.handleChange} value = {this.state.username} required/>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>
                  Birth
                  <input id = 'birth' style={{width:'80%'}} placeholder= {this.state.birth===''?"YYYY-MM-DD":this.state.birth} onChange = {this.handleChange} className="form-control" />
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>
                  Phone
                  <input id = 'phone' style={{width:'80%'}} placeholder= {this.state.phone===''?"(XXX)XXX-XXXX":this.state.phone} onChange = {this.handleChange} className="form-control" />
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center" hover>Gender
                  <MDBFormInline>
                    <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Male" type="radio" id="radio1" />
                    <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Female" type="radio" id="radio2" />
                    <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio===3 ? true : false} label="Transgender" type="radio" id="radio3" />
                    <MDBInput gap onClick={this.onClick(4)} checked={this.state.radio===4 ? true : false} label="Other" type="radio" id="radio4" />
                  </MDBFormInline>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-right" hover>Interest Areas
                  <input style={{width:'80%'}} className="form-control" value = {this.state.interest} id = 'interest' onChange= {this.handleChange}/>
                </MDBListGroupItem>
                
              </MDBCard>
              <form onSubmit = {this.handleSubmit}>
                    <MDBBtn className = 'btn-purple white-text' type = "submit">Save</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
      </MDBContainer>

      
  </div>
    )
  }
}
export default Personal