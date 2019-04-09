import React, { Component } from 'react';
import PersonRepository from './PersonRepository';

export default class ListPerson extends Component {

    constructor(props){
        super(props);

        this.repo = new PersonRepository();

        this.state = {
            persons: []
        }
    }

    getPersons = async() => {
        const persons = await this.repo.getAll();
        this.setState({ persons: [...persons] });
    };

    componentDidMount = async () => await this.getPersons();

    render() {
        let list;
        if(this.state.persons.length === 0) {
            list = <div>Loading...</div>;
        } else {
            list = this.state.persons.map((e, i) => {
                return (
                    <div className="card" key={i}>
                        <p>{e.name}</p>
                        <p>{e.birthday}</p>
                        <p>{e.nationality}</p>
                    </div>
            )});
        }

        return (
            <div className="jumbotron">
                { list }
            </div>
        );
    }
}
