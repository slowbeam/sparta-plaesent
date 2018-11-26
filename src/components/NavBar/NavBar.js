import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-logo"></div>
      <div className="spacer"></div>
      <div className="navigation-items">
        <div>212.555.5555</div>
        <div>LOGIN</div>
        <div><DrawerToggleButton /></div>
      </div>

    </nav>
  </header>
);

export default NavBar;
