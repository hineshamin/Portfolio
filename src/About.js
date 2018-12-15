import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import WorkLines from './lines/WorkLines';
import profile from './screens/profile.jpg';
import resume from './screens/resume.pdf';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <MtSvgLines animate duration={5000}>
          <WorkLines />
        </MtSvgLines>
        <div className="row show mb-5">
          <div className="col-1" />
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 mb-3">
            <img src={profile} alt="Profile" className="About-pic" />
          </div>
          <div className="col-10 offset-1 offset-sm-0 col-sm-3 col-md-5 col-lg-6 col-xl-7">
            <h1 className="active">About me</h1>
            <p className="light">
              <b>tldr: </b>Hi, my name is Hinesh Amin and I am a developer
              originally from London, grew up in Ohio, and currently reside in
              San Francisco. I have 3 years experience working in tech and know
              full stack development. Please checkout my{' '}
              <Link className="About-link" to="/work">
                work{' '}
              </Link>
              and my{' '}
              <a href={resume} className="About-link" target="_blank">
                resume
              </a>
              ; and if you like what you see please{' '}
              <Link to="/contact" className="About-link">
                contact{' '}
              </Link>
              me.
            </p>
            <p className="light">
              <b>long version: </b>As a kid I had always been into sports and
              you could always find me playing them on the playground. One day I
              came to my elementary school to play some tetherball and the BALL
              WAS GONE. What was I going to do? Go home? Not an option. I wasn't
              going to leave without playing tetherball. So I went out to find a
              ball that would work. I found a soccer ball and I tied the string
              around it but it didn’t work though because the ball was too
              slippery. Then I went out a found a rubberized basketball. The
              friction helped it stay in place. Success! Problem solving has
              been a passion of mine since I was a kid and will continue to be a
              passion of mine for the rest of my life. If you are looking for
              someone that will solve problems, build great technology, and is
              not afraid to think outside of the box to do so, then{' '}
              <Link to="/contact" className="About-link">
                contact
              </Link>{' '}
              me. Feel free to also check out my{' '}
              <Link className="About-link" to="/work">
                work
              </Link>{' '}
              and my{' '}
              <a href={resume} className="About-link" target="_blank">
                resume
              </a>
              .
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
