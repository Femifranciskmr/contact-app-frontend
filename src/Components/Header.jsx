import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
          <Navbar collapseOnSelect expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sVFhYo5qCUsPlH_PL_eVWfohy_dnnI0MPQ&usqp=CAU" alt="" height={'40px'} />
                contact book
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">info</Nav.Link>
            <Nav.Link href="#deets">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header