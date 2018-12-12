import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import WorkInfo from './WorkInfo';
import WorkCard from './WorkCard';
import WorkCardSm from './WorkCardSm';
import './Work.css';

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div className="show">
          <WorkInfo />
          <WorkCardSm
            app="jobly"
            tech={['React', 'Node/Express', 'PostgreSQL']}
          />
          <WorkCardSm app="bolt" tech={['React', 'Flask', 'PostgreSQL']} />
          <WorkCardSm app="warbler" tech={['Jinja', 'Flask', 'PostgreSQL']} />
          <WorkCard
            app="jobly"
            tech={['React', 'Node/Express', 'PostgreSQL']}
          />
          <WorkCard app="bolt" tech={['React', 'Flask', 'PostgreSQL']} />
          <WorkCard app="warbler" tech={['Jinja', 'Flask', 'PostgreSQL']} />
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
