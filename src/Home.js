import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import HomeInfo from './HomeInfo';
import WorkCard from './WorkCard';
import WorkCardSm from './WorkCardSm';
import { Link } from 'react-router-dom';
import resume from './screens/resume.pdf';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div className="show">
          <HomeInfo />
          <div className="row mb-4">
            <h3 className="offset-1 offset-sm-2 light">Featured projects</h3>
          </div>
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
          <div className="row">
            <div className="col-1" />
            <div className="col-10 px-0">
              <h3 className="light text-center">
                Please check out the rest of my work{' '}
                <Link to={`/work`} className="Home-worklink">
                  here
                </Link>{' '}
                and on{' '}
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
          <div className="row">
            <div className="col-1" />
            <div className="col-10 px-0">
              <h3 className="light text-center">
                You can see my resume{' '}
                <Link to={resume} target="_blank" className="Home-worklink">
                  here
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
