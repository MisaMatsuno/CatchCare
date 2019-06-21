import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
class NewPost extends React.Component{

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      category: '',
      title: '',
      text: '',
      userID: parseInt(localStorage.getItem('user')),
    }

  }

  handleChange(e) {

    if(e.target.id === 'category' ){
      this.setState({category:e.target.value})

      var form = document.getElementById('form');
      if(e.target.value!='default'){
        form.style.visibility = 'visible';
      }
      else{
        form.style.visibility = 'hidden';
      }
    }
    else{
      this.setState({[e.target.id]:e.target.value})
    }

  }

  handleSubmit(e) {

    e.preventDefault()
    console.log(this.state)
    fetch('/posts', {
        method: 'POST',
        body: JSON.stringify({category: this.state.category, userID: this.state.userID, title: this.state.title, text: this.state.text, replyCount: 0}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods':'POST, GET',
            "Content-Type": "application/json"
        }
      }).then(res => res.json())
        .then(data => {
          if(data.state ==='OK'){
            alert(data.message);
            this.props.history.push('/forum');
          }
          else{
            alert(data.message);
          }
        })
        
  }

	render() {

		return(
			<div>
				<Header></Header>

			  <MDBContainer style = {{position: 'relative', top:'100px', left:"20px", width:'100%'}}>
          <MDBRow className = 'justify-content-center'>
          <MDBCol md = "5">
          <p className = "text-center mb-4 mt-0" fontSize = '15' style = {{fontSize:'30px'}}> New Post </p>
          <div style = {{height:'50px'}}>
            <select id='category' onChange = {this.handleChange} className="browser-default custom-select">
              <option value='default'>Choose your category</option>
              <option value="Finding">NewFinding</option>
              <option value="Social">Social Activity</option>
              <option value="Idea">Experience and Ideas</option>
              <option value="Poll">Polls</option>
            </select>
          </div>



          <div id = "form" style = {{visibility: "hidden"}}>
            <form onSubmit = {(event) => this.handleSubmit(event)}>
              <label htmlFor = "defaultFormRegisterNameEx" className = "grey-text">
                Title
              </label>

              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                id="title"
              />

              <label htmlFor = "defaultFormRegisterNameEx" className = "grey-text">
                Content
              </label>
              <textarea
                className="form-control"
                onChange={this.handleChange}
                id="text"
                rows="5"
                />
              
              <div className = "text-center mb-4 mt-5">
                <MDBBtn
                  color = 'purple'
                  type = "submit"
                  className = "btn-block z-depth-2 white-text">
                  Post to Forum!
                </MDBBtn>
              </div>
            </form>


          </div>
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
export default NewPost