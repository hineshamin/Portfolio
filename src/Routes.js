import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { jobly, bolt, warbler } from './projectsInfo';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import Home from './Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/work" render={() => <Work />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/work/jobly"
          render={() => <ProjectPage {...jobly} />}
        />
        <Route
          exact
          path="/work/bolt"
          render={() => <ProjectPage {...bolt} />}
        />
        <Route
          exact
          path="/work/warbler"
          render={() => <ProjectPage {...warbler} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
