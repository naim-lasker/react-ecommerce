import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () =>
    <div className='header-top'>
        <div className='container d-flex'>
            <div className='header-top-left'>
                <p className='m-0 text-uppercase'>Welcome to E-commerce</p>
            </div>
            <div className='header-top-right ml-auto'>
                <ul className='d-flex m-0'>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>FAQ</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/'>Wishlist</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

export default HeaderTop