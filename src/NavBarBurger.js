import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import './NavBarBurger.css';

class NavBarBurger extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="row NavBarBurger text-white show">
        <div className="col offset-1 NavBarBurger-col p-0">
          <Navbar color="faded" dark className="p-0">
            <NavbarToggler onClick={this.toggleNavbar} />
            <Link to="/" className="NavBar-logo-link m-2">
              <img
                className="NavBar-logo"
                src={require('./logo/LogoWhiteBox.png')}
                alt="Logo"
              />
            </Link>
            <Collapse isOpen={!this.state.collapsed} navbar className="ml-1">
              <Nav navbar>
                <NavItem className="NavBar-link">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="NavBar-link">
                  <NavLink exact to="/work">
                    Work
                  </NavLink>
                </NavItem>
                <NavItem className="NavBar-link">
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem className="NavBar-link">
                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBarBurger;
