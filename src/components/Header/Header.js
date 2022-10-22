import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Booking Hotel</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/book'>Book</Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;