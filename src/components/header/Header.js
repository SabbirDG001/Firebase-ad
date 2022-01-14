import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <div className='Buttons'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;