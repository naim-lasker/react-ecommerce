import React from 'react'

const Header = () => {
    return (
        <header className='header-area'>
            <div className='container'>
                <div className='header-top d-flex'>
                    <div className='header-top-left'>
                        <p>Welcome to E-commerce</p>
                    </div>
                    <div className='header-top-right ml-auto'>
                        <ul className='d-flex'>
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
