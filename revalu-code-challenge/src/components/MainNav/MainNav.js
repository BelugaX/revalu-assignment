import React from 'react';
import logo from '../../logo.svg';
import header_profile from '../../header_profile.svg';
import './MainNav.css';

export default function MainNav() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>
        <ul className='nav-links'>
            <li>Materials</li>
            <li>Elements</li>
            <li>Projects</li>
            <li>Manufacturers</li>
            <li className='active'>
                Collections
            </li>
        </ul>
        <div className='header-profile'>
            <img src={header_profile} alt='profile' />
        </div>
    </nav>
  );
}
