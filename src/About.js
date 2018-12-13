import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div className="row show">
          <div className="col-1" />
          <div className="col">
            <h1 className="light">Coming Soon!</h1>;
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
