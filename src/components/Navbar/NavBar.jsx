import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg='light' expand='md'>
            <Navbar.Brand as={Link} to='/'>
                <img
                    src='/assets/Redux_Logo.png'
                    width='220'
                    height='150'
                    className='d-inline-block align-top mr-2'
                    alt='React Redux Logo'
                />
                <Navbar.Brand className='d-flex align-items-center justify-content-center'>
                    |<code>Preguntas Frecuentes</code>
                </Navbar.Brand>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/products'>
                        Products
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category2'>
                        Category 2
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category3'>
                        Category 3
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
