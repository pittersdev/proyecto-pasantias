
import React from "react";
import { MDBCol, MDBContainer,  MDBFooter } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CardDeck from 'react-bootstrap/CardDeck';

const Footer = () => {
  return (

    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
      <CardDeck>
     
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            <img src="./images/logo.png"alt=""></img>
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
          
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
         
            </h5>
            <ul className="list-unstyled">
            
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Support
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              CONTACTS
            </h5>
            <ul className="list-unstyled">
                <p>
                  <i className="fa fa-home mr-3" /> Punto Fijo, PF 4102, VE
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> Grafits23@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 58 412 750 3349
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 58 269 988 2180
                </p>
            </ul>
            </MDBCol>
          
            
          </CardDeck>
         
      </MDBContainer>
     <hr/>
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.tecnoaraguana.org.ve"> Tecnoparaguana.org.ve  </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;