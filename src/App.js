import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import DashTest from './components/DashTest';
import Person from './components/Person';
import ListPerson from './components/ListPerson';

export default class App extends Component {
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/person' component={Person} />
        <Route path='/dashtest' component={DashTest} />
        <Route path='/personList' component={ListPerson} />
      </Layout>
    );
  }
}
