import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
class PostDetail extends React.Component {

    constructor(props) {

        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            id: '',
            category: '',
            title: '',
            text: '',
            userID: '',
            replyCount: '',
            replies: [],
            newReply: ''
        }

    }

    handleChange(e) {

        if(e.target.id === 'newReply') {
            this.setState({newReply: e.target.value})
        }

    }

    handleSubmit(e) {

        /*fetch('/addreply', {
            method: 'POST',
            body: JSON.stringify({userID: this.state.userID, text: this.state.newReply, post_id: this.state.id}),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET',
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                if(data.state === 'OK'){
                    alert(data.message);
                }
                else{
                    alert(data.message);
                }
            })*/
        //console.log(this.state.userID)
        //console.log(this.state.newReply)
        //console.log(this.state.id)

    }

    handleClick(e) {
        
    }

    componentDidMount() {
  
        fetch('/posts/' + this.props.match.params.id, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Methods':'POST, GET',
            'Content-Type': 'application/json'
          }
        }).then(res => 
            res.json())
            .then(data => {
                this.setState({id: data[0].id})
                this.setState({category: data[0].category})
                this.setState({title: data[0].title})
                this.setState({text: data[0].text})
                this.setState({userID: data[0].userID})
                this.setState({replyCount: data[0].replyCount})
                console.log(this.state)
          })
    
        fetch('/replies', {
            method: 'POST',
            body: JSON.stringify({post_id: this.props.match.params.id}),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods':'POST, GET',
                "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(data => {
                this.setState({replies: data})
                console.log(this.state.replies)
            })

    }

    render() {

        const formatDate = (string) => {
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(string).toLocaleDateString([],options);
        } 

        return (
            <div className = 'App'>
                <Header></Header>
                <MDBContainer className = 'container-fluid' fluid style = {{position: 'relative', top:'100px', left:'40px', width:'100%'}}>
                    <MDBRow className = 'justify-content-between align-items-center' md = '12'>
                        <MDBCol md = '4'>
                            <p>Replies ({ this.state.replyCount })</p>
                        </MDBCol>
                        <MDBCol md = '4'>
                            <p>Poster ID: { this.state.userID }</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style = {{position: 'relative', left: '40px', fontSize: '20px'}}>
                        <strong>{ this.state.title }</strong>
                    </MDBRow>
                    <MDBRow style = {{position: 'relative', left: '40px'}}>
                        <strong>{this.state.text}</strong>
                    </MDBRow>
                    <MDBRow style = {{position: 'relative', left: '40px', fontSize: '20px'}}>
                        <p>Replies:</p>
                    </MDBRow>
                    {this.state.replies && this.state.replies.map((reply, index) => {
                        const userID = reply.userID
                        const text = reply.text
                        const updated_at = formatDate(reply.created_at.toString())
                        return (   
                            <tr key = { index }>           
                            <td> 
                                <MDBContainer className = 'container-fluid' style = {{width:'100%'}}>
                                    <MDBRow className = 'justify-content-between align-items-center' md = '12'>
                                        <MDBCol md = '4'>
                                            <p>Poster ID: { userID }</p>
                                        </MDBCol>
                                        <MDBCol md = '10'>
                                            Post Comment Time: {updated_at}
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow style = {{position:'relative', left:"40px"}}>
                                        <strong>{ text }</strong>
                                    </MDBRow>
                                </MDBContainer>
                            </td>
                            </tr>
                        );
                    })}
                    <MDBRow style = {{position: 'relative', left: '40px', fontSize: '20px'}}>
                        <p>Add new reply</p>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md = '10'>
                            <textarea className = 'form-control' onChange = {this.handleChange} id = 'newReply' rows = '5'/>
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn gradient = 'purple' type = 'button' className = 'white-text' onClick = { this.handleSubmit }> 
                        Add Reply  
                    </MDBBtn>
                </MDBContainer>
                <div style = {{position: 'relative', top: '300px', width: '100%'}}>
    		        <Footer></Footer>
    		    </div>
            </div>
        )

    }
}
export default PostDetail