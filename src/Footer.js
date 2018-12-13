import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer show">
        <h3 className="light">
          <a
            href="https://github.com/hineshamin"
            className="fab fa-github link"
          />
        </h3>
        <h3 className="light">
          <a
            href="https://www.linkedin.com/in/hinesh-amin-9084a094/"
            className="fab fa-linkedin link"
          />
        </h3>
        <h3 className="light">
          <a
            href="mailto:hineshamin01@gmail.com"
            className="fas fa-envelope link"
          />
        </h3>
      </div>
    );
  }
}

export default Footer;
