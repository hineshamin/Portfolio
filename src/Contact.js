import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import resume from './screens/resume.pdf';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div className="show">
          <div className="row mb-3">
            <div className="col-1" />
            <div className="col-10">
              <h1 className="active contact">Contact me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <a
                href="https://github.com/hineshamin"
                className="btn btn-primary github mr-3"
                target="_blank"
              >
                <h3 className="text-white mt-2">
                  <i className="fab fa-github" /> Github
                </h3>
              </a>
              <a
                href="https://www.linkedin.com/in/hinesh-amin"
                className="btn btn-primary linkedin mr-3"
                target="_blank"
              >
                <h3 className="text-white mt-2">
                  <i className="fab fa-linkedin" /> LinkedIn
                </h3>
              </a>
              <a
                href="mailto:hineshamin01@gmail.com"
                className="btn btn-primary email mr-3"
              >
                <h3 className="text-white mt-2">
                  <i className="fas fa-envelope" /> Email
                </h3>
              </a>
              <a
                href={resume}
                className="btn btn-primary resume mr-3"
                target="_blank"
              >
                <h3 className="text-white mt-2">
                  <i className="fas fa-file" /> Resume
                </h3>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
