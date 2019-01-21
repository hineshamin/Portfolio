import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resume from './screens/resume.pdf';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer show">
        <h3 className="light">
          <a
            href="https://github.com/hineshamin"
            className="fab fa-github link"
            target="_blank"
            title="Github"
          />
        </h3>
        <h3 className="light">
          <a
            href="https://www.linkedin.com/in/hinesh-amin"
            className="fab fa-linkedin link"
            target="_blank"
            title="LinkedIn"
          />
        </h3>
        <h3 className="light">
          <Link
            to="/contact"
            className="fas fa-envelope link"
            title="Contact"
          />
        </h3>
        <h3 className="light">
          <Link
            to={resume}
            target="_blank"
            className="fas fa-file link"
            title="Resume"
          />
        </h3>
      </div>
    );
  }
}

export default Footer;
