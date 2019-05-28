import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    
    <MDBFooter color="purple" className="font-small pt-3 mt-3" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">User Guide</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">New User</a>
              </li>
              <li>
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Designer Guide</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">New Designer</a>
              </li>
              <li>
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">24 Hour Customer Support</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">History</a>
              </li>
              <li>
                <a href="#!">Visions & Missions</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
}

export default Footer;