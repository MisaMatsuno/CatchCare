import React from 'react';
import {withRouter} from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
class Posts extends React.Component {
 
  
  render() {
    return(

    	<MDBTable hover>
      <MDBTableBody>
        <tr>
          <MDBContainer>
            <table style={{height: "100px"}}>
              <tbody>
                <tr>
                  <td className="align-baseline">baseline</td>
                  <td className="align-top">top</td>
                  <td className="align-middle">middle</td>
                  <td className="align-bottom">bottom</td>
                  <td className="align-text-top">text-top</td>
                  <td className="align-text-bottom">text-bottom</td>
                </tr>
              </tbody>
            </table>
          </MDBContainer>
        </tr>
        <tr>
          <td>Entry 2</td>
          <td>Review: 4.0/5.0</td>
        </tr>
        <tr>
          <td>Entry 3</td>
          <td>Review: 3.5/5.0</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
      
    )
  }
}
export default Posts;