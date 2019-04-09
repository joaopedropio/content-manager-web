import React from 'react';

export default (props) => {
    let list;
    if(props.persons.length === 0) {
        list = <div>Loading...</div>;
    } else {
        list = props.persons.map((e, i) => {
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
