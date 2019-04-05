import React, { Component } from 'react';
import axios from 'axios';
const { url } = require('../config');

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Mickey',
      birthday: '11-11-2000',
      nationality: 'EUA'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let api = url + '/api/person';

    axios.post(api, this.state)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  handleChange() {}

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:<br/>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <br/>
        Birthday:<br/>
        <input type="text" value={this.state.birthday} onChange={this.handleChange} />
        <br/>
        Nationality:<br/>
        <input type="text" value={this.state.nationality} onChange={this.handleChange} />
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
