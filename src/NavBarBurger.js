import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className="col NavBarBurger-col">
          <Navbar color="faded" dark>
            <NavbarToggler onClick={this.toggleNavbar} />
            <img
              className="NavBar-logo"
              src={require('./logo/LogoWhiteBox.png')}
              alt="Logo"
            />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem className="NavBar-link">
                  <NavLink exact to="/">
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
