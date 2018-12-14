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
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <h1 className="active">Contact me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <a
                href="https://github.com/hineshamin"
                className="btn btn-primary github"
              >
                <h3 className="light mt-2">
                  <i className="fab fa-github" /> Github
                </h3>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <a
                href="https://www.linkedin.com/in/hinesh-amin-9084a094/"
                className="btn btn-primary linkedin"
              >
                <h3 className="light mt-2">
                  <i className="fab fa-linkedin" /> LinkedIn
                </h3>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <a
                href="mailto:hineshamin01@gmail.com"
                className="btn btn-primary email"
              >
                <h3 className="light mt-2">
                  <i className="fas fa-envelope" /> Email
                </h3>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <a
                href={resume}
                className="btn btn-primary resume"
                target="_blank"
              >
                <h3 className="light mt-2">
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
