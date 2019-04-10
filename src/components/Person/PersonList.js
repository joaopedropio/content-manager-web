import React from 'react';
import { PropTypes } from 'prop-types';

const PersonList = (props) => {
  const { persons } = props;

  let list;
  if (persons.length === 0) {
    list = <div>Loading...</div>;
  } else {
    list = persons.map(person => (
      <div className="card" key={person.id}>
        <p>{person.name}</p>
        <p>{person.birthday}</p>
        <p>{person.nationality}</p>
        <button type="button" onClick={() => props.onDelete(person.id)}>Delete</button>
      </div>
    ));
  }

  return (
    <div className="jumbotron">
      { list }
    </div>
  );
};

PersonList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date).isRequired,
    nationality: PropTypes.string.isRequired,
  })).isRequired,
};

export default PersonList;
