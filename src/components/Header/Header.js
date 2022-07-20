import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Link className='navbar-brand' to={'/'}>Flex Fog</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to={'/'} className='nav-link'>Dashboard</Link>
                        <Link to={'/login'} className='nav-link'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;