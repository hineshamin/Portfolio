import React, { Component } from 'react';
import './WorkInfo.css';

class WorkInfo extends Component {
  render() {
    return (
      <div className="row WorkInfo">
        <div className="col-1" />
        <div className="col-10 col-sm-6 col-xl-4 px-0">
          <h1 className="active" id="BigHeader">
            Work
          </h1>
          <h3 className="light" id="subtext">
            Below you can find projects that I have completed. Many of them have
            github links to check out the code as well as external site links to
            see a live hosted version.
          </h3>
        </div>
        <div className="col-1" />
      </div>
    );
  }
}

export default WorkInfo;
