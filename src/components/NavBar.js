import React from 'react';
import HamburgerButton from './HamburgerButton';

const NavBar = props => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo"></div>
      <div className="navigation-items">
        <div className="navbar-phone">212.555.5555</div>
        <div className="navbar-login">LOGIN</div>
        <div><HamburgerButton /></div>
      </div>

    </nav>
  </div>
);

export default NavBar;
