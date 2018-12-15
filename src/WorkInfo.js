import React, { Component } from 'react';
import './WorkInfo.css';

class WorkInfo extends Component {
  render() {
    return (
      <div className="row WorkInfo">
        <div className="col-1" />
        <div className="col-10 px-0">
          <h1 className="active" id="BigHeader">
            Work
          </h1>
        </div>
        <div className="col-1" />
      </div>
    );
  }
}

export default WorkInfo;
