import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkCardSm.css';

class WorkCardSm extends Component {
  render() {
    return (
      <div className="row WorkCardSm">
        <div className="col-1" />
        <Link
          to={`/${this.props.app}`}
          className={`col-10 WorkCardSm-image ${this.props.app}`}
        >
          <div>
            <h2 className="light">
              {this.props.app[0].toUpperCase() + this.props.app.slice(1)}
            </h2>
            <h3 className="light">{this.props.tech.join('•')}</h3>
          </div>
        </Link>
        <div className="col-1" />
      </div>
    );
  }
}

export default WorkCardSm;
