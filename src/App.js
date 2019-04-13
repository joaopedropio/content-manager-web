import React from 'react';
import { Container } from 'reactstrap';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import NavMenu from './components/NavMenu';
import Home from './components/Home';
import MediaPathTest from './components/MediaTest/MediaPathTest';
import Person from './components/Person/Person';
import Error from './components/Error';
import MediaList from './components/Media/MediaList';

const App = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <div>
      <NavMenu />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/mediatest" component={MediaPathTest} />
          <Route path="/media" component={MediaList} />
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
