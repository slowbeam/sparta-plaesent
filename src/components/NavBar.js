import React from 'react';
import HamburgerButton from './HamburgerButton';

const NavBar = props => (
  <div className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo"></div>
      <div className="spacer"></div>
      <div className="navigation-items">
        <div>212.555.5555</div>
        <div>LOGIN</div>
        <div><HamburgerButton /></div>
      </div>

    </nav>
  </div>
);

export default NavBar;
