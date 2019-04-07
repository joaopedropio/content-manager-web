import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../config';

export default class PostPerson extends Component {

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

    axios.post(api, { 
      name: this.state.name,
      birthday: this.state.birthday,
      nationality: this.state.nationality
     })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    const { 
      name,
      birthday,
      nationality
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Name:<br/>
        <input type="text" name="name" value={name} onChange={this.onChange} />
        <br/>
        Birthday:<br/>
        <input type="text" name="birthday" value={birthday} onChange={this.onChange} />
        <br/>
        Nationality:<br/>
        <input type="text" name="nationality" value={nationality} onChange={this.onChange} />
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
