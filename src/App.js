import React from 'react';
import { Container } from 'reactstrap';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import DashMain from './components/DashTest/DashMain';
import Person from './components/Person/Person';
import Error from './components/Error';
import Media from './components/Media/Media';

const App = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <div>
      <NavMenu />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/dashtest" component={DashMain} />
          <Route path="/media" component={Media} />
          <Route component={Error} />
        </Switch>
      </Container>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default App;
