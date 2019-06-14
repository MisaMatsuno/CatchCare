import React from 'react';
import {withRouter} from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
class Posts extends React.Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.state={
      data: null
    }
  }

  handleClick(e){
    alert('clicked!')

  }

  componentDidMount(){
    fetch('/posts', {
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
            this.setState({data:data})
          
      })
    
    
  }
 
  
  render() {
    return(

    	<MDBTable hover>
      <MDBTableBody>
        {this.state.data && this.state.data.map((post,id)=>{
          const title = post.title
          const text = post.text
          const userID = post.userID.toString()
          const replyCount = post.replyCount.toString()
          const updated_at = post.updated_at
          return (
            <tr onClick = {this.handleClick}>
              <td>
                <MDBContainer className='container-fluid' style = {{width:'100%'}}>
                  <MDBRow className = 'justify-content-between align-items-center' md = '12'>
                    <MDBCol md = '4'>
                      <p>Replies ({replyCount})</p>
                    </MDBCol>
                    <MDBCol md = '4'>
                      <p>{userID}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow style={{position:'relative', left:"40px", fontSize:'20px'}}>
                    <strong>{title}</strong>
                  </MDBRow>
                  <MDBRow style={{position:'relative', left:"40px"}}>
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