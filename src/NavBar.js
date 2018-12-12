import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="row NavBarReg show">
        <div className="col-1" />
        <div className="d-flex col-10 justify-content-between">
          <img
            className="NavBar-logo"
            src={require('./logo/LogoWhiteBox.png')}
            alt="Logo"
          />
          <nav className="NavBar d-flex justify-content-between">
            <div className="NavBar-link d-flex flex-column justify-content-center">
              <NavLink exact to="/">
                Work
              </NavLink>
            </div>
            <div className="NavBar-link d-flex flex-column justify-content-center">
              <NavLink exact to="/about">
                About
              </NavLink>
            </div>
            <div className="NavBar-link d-flex flex-column justify-content-center">
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="col-1" />
      </div>
    );
  }
}

export default NavBar;
