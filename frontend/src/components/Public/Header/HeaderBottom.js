import React from 'react'
import { Badge, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <div className='header-bottom'>
            <div className='container'>
                <Navbar expand="lg" className='p-0'>
                    <Link to="/" className="navbar-brand">
                        <img src='/images/logo.png' alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="" className="nav-link">Category</Link>
                        </Nav>

                        <Nav className="ml-auto">
                            <Link to="#home" className="nav-link">
                                Login
                            </Link>
                            <Link to="/cart" className="nav-link">
                                <FaShoppingCart size={18} />
                                {
                                    cartItems.length > 0 &&
                                    <Badge variant="danger" className="cart-badge">
                                        {cartItems.length}
                                    </Badge>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default HeaderBottom
