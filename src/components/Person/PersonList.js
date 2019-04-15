import React from 'react';
import { PropTypes } from 'prop-types';
import { format } from 'date-fns';

const PersonList = (props) => {
  const { persons } = props;

  let list;
  if (persons.length === 0) {
    list = <div>Loading...</div>;
  } else {

    list = persons.map(person => {
      
      const { birthday } = person;
      const date = new Date(birthday);

      return (
        <div className="card" key={person.id}>
          <p>{person.name}</p>
          <p>{format(date, "DD/MM/YYYY")}</p>
          <p>{person.nationality}</p>
          <button type="button" color="btn btn-danger" onClick={() => props.onDelete(person.id)}>Delete</button>
        </div>
      )
    });
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
    birthday: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
  })).isRequired,
};

export default PersonList;
