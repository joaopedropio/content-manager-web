import React, { Component } from 'react';
import ListPerson from './ListPerson';
import PostPerson from './PostPerson';

export default class Person extends Component {
    render() {
        return (
            <div>
                <ListPerson />
                <PostPerson />
            </div>
        );
    }
}