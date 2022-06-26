import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import Container from 'react-bootstrap/Container';

// Returns the site's navbar for use across components
function Navigation() {
  return (
    <Navbar expand="lg" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Brand className='text-light'>Matt Habbo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav.Link href="#/">About</Nav.Link>
          <Nav.Link href="#/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#/contact">Contact</Nav.Link>
		  <Nav.Link href="#/resume">Resume</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
