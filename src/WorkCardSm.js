import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkCardSm.css';

class WorkCardSm extends Component {
  render() {
    return (
      <div className="row WorkCardSm">
        <Link
          to={`/work/${this.props.app}`}
          className={`col-12 WorkCardSm-image ${this.props.app}`}
        >
          <div>
            <h2 className="light">{this.props.title}</h2>
            <h3 className="light">{this.props.tech.join(' • ')}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default WorkCardSm;
