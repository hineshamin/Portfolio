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
            app="coursereportmobile"
            tech={[
              'React Native',
              'Node/Express',
              'Rails',
              'Redis',
              'PostgreSQL'
            ]}
            title="Course Report Mobile"
          />
          <WorkCardSm
            app="jobly"
            tech={['React', 'Node/Express', 'PostgreSQL']}
            title="Jobly"
          />
          <WorkCardSm
            app="warbler"
            tech={['Jinja', 'Flask', 'PostgreSQL']}
            title="Warbler"
          />
          <WorkCardSm
            app="bolt"
            tech={['React', 'Flask', 'PostgreSQL']}
            title="Bolt"
          />
          <WorkCard
            app="coursereportmobile"
            tech={[
              'React Native',
              'Node/Express',
              'Rails',
              'Redis',
              'PostgreSQL'
            ]}
            title="Course Report Mobile"
          />
          <WorkCard
            app="jobly"
            tech={['React', 'Node/Express', 'PostgreSQL']}
            title="Jobly"
          />
          <WorkCard
            app="warbler"
            tech={['Jinja', 'Flask', 'PostgreSQL']}
            title="Warbler"
          />
          <WorkCard
            app="bolt"
            tech={['React', 'Flask', 'PostgreSQL']}
            title="Bolt"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
