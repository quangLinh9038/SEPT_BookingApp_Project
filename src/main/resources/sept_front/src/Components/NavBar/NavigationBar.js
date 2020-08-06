import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #424949; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #424949;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.2em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><b>Bookin'</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse> */}
      {/* <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="#!">
          <MDBIcon fab icon="twitter" />
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="waves-effect waves-light" to="#!">
          <MDBIcon fab icon="google-plus-g" />
        </MDBNavLink>
      </MDBNavItem> */}
    </Navbar>
  </Styles> 
)