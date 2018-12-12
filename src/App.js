import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import NavBarBurger from './NavBarBurger';
import Routes from './Routes';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <NavBarBurger />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
