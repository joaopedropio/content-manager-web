import React, { Component } from 'react';

export default class PersonForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      birthday: "",
      nationality: ""
    };

    this.handleSubmit = props.handleSubmit;
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    const person = { ...this.state };

    return (
      <form onSubmit={async (event) => await this.handleSubmit(event, person)}>
        Name:<br/>
        <input type="text" name="name" value={person.name} onChange={this.onChange} />
        <br/>
        Birthday:<br/>
        <input type="text" name="birthday" value={person.birthday} onChange={this.onChange} />
        <br/>
        Nationality:<br/>
        <input type="text" name="nationality" value={person.nationality} onChange={this.onChange} />
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
