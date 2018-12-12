import React, { Component } from 'react';
import './WorkInfo.css';

class WorkInfo extends Component {
  render() {
    return (
      <div className="row WorkInfo">
        <div className="col-1" />
        <div className="col-10">
          <h1 className="active" id="BigHeader">
            Hi, my name is Hinesh.
          </h1>
          <h3 className="light" id="subtext">
            I love to build technology.
          </h3>
        </div>
        <div className="col-1" />
      </div>
    );
  }
}

export default WorkInfo;
