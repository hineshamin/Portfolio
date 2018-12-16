import React, { Component } from 'react';
import './ProjectPage.css';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import { Link } from 'react-router-dom';
import Game from './lightsout/Game';
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
            <div className="col-1" />
            <div className="col-10">
              <div>
                <h1 className="active" id="BigHeader">
                  {this.props.title}
                </h1>
              </div>
              <div>
                <h3 className="light">{this.props.tech.join(' • ')}</h3>
              </div>
              <div className="row m-0">
                <h3 className="light mr-3">
                  {this.props.github ? (
                    <a
                      href={this.props.github}
                      className="fab fa-github link"
                      target="_blank"
                      title="Github"
                    />
                  ) : (
                    ''
                  )}
                </h3>
                <h3 className="light">
                  {this.props.live ? (
                    <a
                      href={this.props.live}
                      className="fas fa-external-link-alt"
                      target="_blank"
                      title="Live Site"
                    />
                  ) : (
                    ''
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="row" id="content">
            <div className="col-1" />
            <div className="col-10 col-xl-6">
              <p className="light">{this.props.description}</p>
            </div>
            <div className="col-sm-2 col-1" />
          </div>
          {this.props.media === 'iphone'
            ? this.props.screens.map((screen, i) =>
                i % 2 === 0 ? (
                  <div key={uuid()} className="row">
                    <div className="col-5 col-sm-4 offset-1">
                      <img src={screen} className="ProjectPage-image" />
                    </div>
                    <div className="col-5 col-sm-4 offset-sm-2">
                      <img
                        src={this.props.screens[i + 1]}
                        className="ProjectPage-image"
                      />
                    </div>
                  </div>
                ) : null
              )
            : this.props.screens.map(screen => (
                <div key={uuid()} className="row">
                  <div className="col-1" />
                  <div className="col-10">
                    <img src={screen} className="ProjectPage-image" />
                  </div>
                </div>
              ))}
          <div className="row d-flex justify-content-center mt-5">
            {this.props.media === 'game' ? <Game className="game" /> : null}
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <Link
                to={`/work/${this.props.nextProject}`}
                id="ProjectPage-next"
                className="mb-2"
              >
                <h1 className="light text-center">
                  Next Project: {this.props.nextProjectTitle}
                </h1>
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center m-0">
            <Link to={`/work`} id="ProjectPage-next" className="mt-0">
              <h1 className="light text-center">All my work</h1>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectPage;
