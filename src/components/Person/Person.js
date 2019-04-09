import React, { Component } from 'react';
import PersonList from './PersonList';
import PersonForm from './PostForm';
import PersonRepository from './PersonRepository';

export default class Person extends Component {

    constructor(props){
        super(props);

        this.state = {
            persons: []
        }

        this.repo = new PersonRepository();
    }

    getPersons = async() => {
        const persons = await this.repo.getAll();
        this.setState({ persons: [...persons] });
    };

    componentDidMount = async () => await this.getPersons();

    handleSubmit = async (event, person) => {
        event.preventDefault();
        
        await this.repo.add({...person});
        const persons = await this.repo.getAll();
        this.setState(({ persons: persons }));
    }

    render() {
        const persons = [...this.state.persons];

        return (
            <div>
                <PersonList persons={(() => persons)()}/>
                <PersonForm handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}