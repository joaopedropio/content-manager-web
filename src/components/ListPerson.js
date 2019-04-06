import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../config';

export default class ListPerson extends Component {

    constructor(props){
        super(props);

        this.state = {
            persons: []
        };
    }

    getPersons = async () => {
        let res = await axios.get(url + '/api/person');
        let data = await res.data;
        if (data === null || data === undefined){
            this.setState({ persons: [] });
        } else {
            this.setState({ persons: data });
        }
    };

    async componentDidMount() {
        await this.getPersons();
    };

    render() {
        return (
            <div className="jumbotron">
                {
                    this.state.persons.length === 0
                        ? (<div>Loading...</div>)
                        : (this.state.persons.map((e, i) => {
                            return (
                                <div className="card" key={i}>
                                    <p>{e.name}</p>
                                    <p>{e.birthday}</p>
                                    <p>{e.nationality}</p>
                                </div>
                            );
                        }))       
                }
            </div>
        );
    }
}

/*
               {this.state.users.length === 0 ?  : 
               )}
*/