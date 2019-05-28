import React from 'react';
import {withRouter} from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
class Search extends React.Component {
 
  
  render() {
    return(

    	<MDBTable hover>
      <MDBTableBody>
        <tr>
          <td>Entry 1</td>
          <td>Review: 4.5/5.0 </td>
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
export default Search;