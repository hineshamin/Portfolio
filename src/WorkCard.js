import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkCard.css';

class WorkCard extends Component {
  render() {
    return (
      <div className="row WorkCard">
        <div className="col-2" />

        <div className={`col-8 WorkCard-image ${this.props.app}`}>
          <div>
            <h2 className="light">
              {this.props.app[0].toUpperCase() + this.props.app.slice(1)}
            </h2>
            <h3 className="light">{this.props.tech.join(' • ')}</h3>
            <Link className="WordCard-button" to={`/work/${this.props.app}`}>
              <h3 className="WordCard-button-link light d-flex justify-content-center align-items-center">
                Project Overview
              </h3>
            </Link>
          </div>
        </div>
        <div className="col-2" />
      </div>
    );
  }
}

export default WorkCard;
