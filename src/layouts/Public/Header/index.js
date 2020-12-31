import React from 'react'

const Header = () => {
    return (
        <header className='header-area'>
            <div className='header-top'>
                <div className='container d-flex'>
                    <div className='header-top-left'>
                        <p className='m-0 text-uppercase'>Welcome to E-commerce</p>
                    </div>
                    <div className='header-top-right ml-auto'>
                        <ul className='d-flex m-0'>
                            <li>
                                <a href='/'>About</a>
                            </li>
                            <li>
                                <a href='/'>FAQ</a>
                            </li>
                            <li>
                                <a href='/'>Contact</a>
                            </li>
                            <li>
                                <a href='/'>Wishlist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
