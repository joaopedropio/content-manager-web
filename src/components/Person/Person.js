import React, { Component } from 'react';
import { format } from 'date-fns';
import PersonList from './PersonList';
import PersonForm from './PersonForm';
import repo from '../../repositories/PersonRepository';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  getPersons = async () => {
    const persons = await repo.getAll();
    this.setState({ persons: [...persons] });
  };

  componentDidMount = async () => this.getPersons();

  handleSubmit = async (event, person) => {
    event.preventDefault();

    const { name, birthday, nationality } = person;

    const p = {
      name,
      nationality,
      birthday: format(birthday, 'DD-MM-YYYY'),
    };

    await repo.add(p);
    const persons = await repo.getAll();
    this.setState(({ persons }));
  }

  onDelete = async (personId) => {
    await repo.remove(personId);
    const persons = await repo.getAll();
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
