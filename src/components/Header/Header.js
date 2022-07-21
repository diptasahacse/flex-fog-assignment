import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import authService from '../../services/authService';
const Header = () => {
    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        setToken(authService.getCurrentUser())

    }, [authService.getCurrentUser()])

    const logOutHandler = () => {

        authService.logout();
        navigate('/login')
    }
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Link className='navbar-brand' to={'/'}>Flex Fog</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to={'/'} className='nav-link'>Dashboard</Link>
                        {
                            token ? <button onClick={logOutHandler} className='btn btn-danger'>Logout</button> : <Link to={'/login'} className='nav-link'>Login</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;