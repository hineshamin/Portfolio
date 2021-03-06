import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            app="algorithms"
            tech={['JavaScript', 'Python']}
            title="Algorithms"
          />
          <WorkCardSm
            app="humbleabode"
            tech={['C#', 'Unity Game Engine']}
            title="Humble Abode"
          />
          <WorkCardSm
            app="microblog"
            tech={['React', 'Redux', 'Node/Express']}
            title="Microblog"
          />
          <WorkCardSm
            app="coursereportapp"
            tech={['jQuery', 'Rails', 'PostgreSQL']}
            title="Course Report Comparison Tool"
          />
          <WorkCardSm
            app="bolt"
            tech={['React', 'Flask', 'PostgreSQL']}
            title="Bolt"
          />
          <WorkCardSm app="lightsout" tech={['React']} title="Lights Out" />
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
            app="algorithms"
            tech={['JavaScript', 'Python']}
            title="Algorithms"
          />
          <WorkCard
            app="humbleabode"
            tech={['C#', 'Unity Game Engine', '3ds Max', 'Gaia']}
            title="Humble Abode"
          />
          <WorkCard
            app="microblog"
            tech={['React', 'Redux', 'Node/Express']}
            title="Microblog"
          />
          <WorkCard
            app="coursereportapp"
            tech={['jQuery', 'Rails', 'PostgreSQL']}
            title="Course Report Comparison Tool"
          />
          <WorkCard
            app="bolt"
            tech={['React', 'Flask', 'PostgreSQL']}
            title="Bolt"
          />
          <WorkCard app="lightsout" tech={['React']} title="Lights Out" />
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10 px-0">
            <h3 className="light text-center">
              Please check out the rest of my work on{' '}
              <a
                href="https://github.com/hineshamin"
                target="_blank"
                className="Home-worklink"
              >
                github
              </a>
            </h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
