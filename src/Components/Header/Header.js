import React from 'react';

import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header'>
            <img className='header' src={logo} alt="" width="300px" />
            <nav><a href="/shop">Shop</a>
                <a href="/Order">Order Review</a>
                <a href="/Inventory">Manage Inventory Here</a>
            </nav>
        </div >
    );
};

export default Header;