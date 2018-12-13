import React, { Component } from 'react';
import './ProjectPage.css';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines key={uuid()} animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div key={uuid()} className="show">
          <div className="row">
            <div className="col-1 col-md-2 col-xl-3" />
            <div className="col-10 col-md-9 col-xl-8">
              <div className="row">
                <h1 className="active" id="BigHeader">
                  {this.props.title}
                </h1>
              </div>
              <div className="row">
                <h3 className="light">{this.props.tech.join(' • ')}</h3>
              </div>
              <div className="row">
                <h3 className="light mr-3">
                  {this.props.github ? (
                    <a href={this.props.github} className="fab fa-github" />
                  ) : (
                    ''
                  )}
                </h3>
                <h3 className="light">
                  {this.props.live ? (
                    <a
                      href={this.props.live}
                      className="fas fa-external-link-alt"
                    />
                  ) : (
                    ''
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="row" id="content">
            <div className="col-1 col-md-7 col-xl-6" />
            <div className="col-10 col-md-4 col-xl-3">
              <p className="light">{this.props.description}</p>
            </div>
            <div className="col-sm-2 col-1" />
          </div>
          {this.props.screens.map(screen => (
            <div key={uuid()} className="row">
              <div className="col-1" />
              <div className="col-10">
                <img src={screen} className="ProjectPage-image" />
              </div>
            </div>
          ))}
          <div className="row d-flex justify-content-center">
            <Link to={`/${this.props.nextProject}`} id="ProjectPage-next">
              <h1 className="light text-center">
                Next Project:{' '}
                {this.props.nextProject[0].toUpperCase() +
                  this.props.nextProject.slice(1)}
              </h1>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectPage;
