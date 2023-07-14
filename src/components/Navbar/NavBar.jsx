import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg='light' expand='md'>
            <Navbar.Brand as={Link} to='/'>
                {/*  <img
                    src='/assets/Redux_Logo.png'
                    width='120'
                    height='80'
                    className='d-inline-block align-top mr-2'
                    alt='React Redux Logo'
                /> */}
                <Navbar.Brand className='d-flex align-items-center justify-content-center'>
                    |<code>Preguntas Frecuentes</code>
                </Navbar.Brand>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/products'>
                        |<code>Saludos</code>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category1'>
                        |<code>Administrativos</code>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category3'>
                        <code>Category 3</code>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
