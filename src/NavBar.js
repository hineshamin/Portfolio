import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="row NavBarReg show">
        <div className="col-1" />
        <div className="d-flex col-10 justify-content-between">
          <Link to="/" className="NavBar-logo-link">
            <img
              className="NavBar-logo"
              src={require('./logo/LogoWhiteBox.png')}
              alt="Logo"
            />
          </Link>
          <nav className="NavBar d-flex justify-content-between">
            <div className="NavBar-link d-flex flex-column justify-content-center">
              <NavLink exact to="/">
                Home
              </NavLink>
            </div>
            <div className="NavBar-link d-flex flex-column justify-content-center">
              <NavLink exact to="/work">
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
