import React, { Component } from 'react';
import PersonRepository from './PersonRepository';

export default class PostPerson extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      birthday: "",
      nationality: ""
    };

    this.repo = new PersonRepository();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.repo.add({ ...this.state });
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
