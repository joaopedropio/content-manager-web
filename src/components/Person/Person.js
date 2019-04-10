import React, { Component } from 'react';
import PersonList from './PersonList';
import PersonForm from './PersonForm';
import PersonRepository from './PersonRepository';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };

    this.repo = new PersonRepository();
  }

  getPersons = async () => {
    const persons = await this.repo.getAll();
    this.setState({ persons: [...persons] });
  };

  componentDidMount = async () => this.getPersons();

  handleSubmit = async (event, person) => {
    event.preventDefault();

    await this.repo.add({ ...person });
    const persons = await this.repo.getAll();
    this.setState(({ persons }));
  }

  onDelete = async (personId) => {
    await this.repo.remove(personId);
    const persons = await this.repo.getAll();
    this.setState(({ persons }));
  }

  render() {
    const { persons } = this.state;

    return (
      <div>
        <PersonList persons={persons} onDelete={this.onDelete} />
        <PersonForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
