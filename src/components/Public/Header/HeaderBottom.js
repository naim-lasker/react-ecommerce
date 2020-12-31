import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const HeaderBottom = () =>
    <div className='header-bottom'>
        <div className='container'>
            <Navbar expand="lg" className='p-0'>
                <Navbar.Brand href="#home">
                    <img src='/images/logo.png' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Category 1</Nav.Link>
                        <Nav.Link href="">Category 2</Nav.Link>
                        <Nav.Link href="">Category 3</Nav.Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">My Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>

export default HeaderBottom
