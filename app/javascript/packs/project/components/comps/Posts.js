import React from 'react';
import {withRouter} from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
class Posts extends React.Component {

  constructor(props) {

    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      data: null
    }

  }

  handleClick(e) {

    alert(e.target.value)

  }

  componentDidMount() {

    fetch('/posts', {
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
        this.setState({data: data})
        console.log(this.state.data)
      })
      
  }
  
  render() {

    const formatDate = (string) => {
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
    } 

    return(

    	<MDBTable hover>
      <MDBTableBody>
        {this.state.data && this.state.data.map((post,id)=>{
          const title = post.title
          const text = post.text
          const userID = post.userID.toString()
          const replyCount = post.replyCount.toString()
          const updated_at = formatDate(post.updated_at.toString())
          return (
            <tr onClick = {this.handleClick} key = {id} value = {id}>
              <td> 
                <MDBContainer className = 'container-fluid' style = {{width:'100%'}}>
                  <MDBRow className = 'justify-content-between align-items-center' md = '12'>
                    <MDBCol md = '4'>
                      <p>Replies ({replyCount})</p>
                    </MDBCol>
                    <MDBCol md = '4'>
                      <p>Poster ID: {userID}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow style = {{position:'relative', left:"40px", fontSize:'20px'}}>
                    <strong>{title}</strong>
                  </MDBRow>
                  <MDBRow style = {{position:'relative', left:"40px"}}>
                    <strong>{text}</strong>
                  </MDBRow>
                </MDBContainer>
              </td>
              <td>
                Latest Comment Time: {updated_at}
              </td>
            </tr>
          )
      })}  
      </MDBTableBody>
    </MDBTable>    
    )

  }
}
export default Posts;