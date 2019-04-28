import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import NavMenu from './components/NavMenu';
import Home from './components/Home';
import MediaPathTest from './components/MediaPathTest/MediaPathTest';
import Person from './components/Person/Person';
import Error from './components/Error';
import MediaMain from './components/Media/MediaMain';
import Movie from './components/Movie';

const App = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <div>
      <NavMenu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie" component={Movie} />
          <Route path="/person" component={Person} />
          <Route path="/mediatest" component={MediaPathTest} />
          <Route path="/media" component={MediaMain} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default App;
