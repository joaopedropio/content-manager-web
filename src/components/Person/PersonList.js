import React from 'react';

export default (props) => {
    let list;
    if(props.persons.length === 0) {
        list = <div>Loading...</div>;
    } else {
        list = props.persons.map((person, index) => {
            return (
                <div className="card" key={index}>
                    <p>{person.name}</p>
                    <p>{person.birthday}</p>
                    <p>{person.nationality}</p>
                    <button onClick={() => props.onDelete(person.id)}>Delete</button>
                </div>
        )});
    }

    return (
        <div className="jumbotron">
            { list }
        </div>
    );
}
