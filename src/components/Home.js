import React from 'react';
import './Home.css'

const Home = () => (
  <div id="home" className="container jumbotron">
    <div id="home_row" className="row">
      <div id="home_header" className="col-12">
        <h1>Welcome to Content Manager</h1>
      </div>
    </div>
  </div>
);

Home.displayName = 'Home Component';

export default Home;