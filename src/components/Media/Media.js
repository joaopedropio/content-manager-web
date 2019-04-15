import React from 'react';
import PropTypes from 'prop-types';

const Media = (props) => {
  const { media, onClick} = props;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-10">
          <p>Name: {media.name}</p>
          <p>Description: {media.description}</p>
          <p>Path: {media.path}</p>
          <p>Type: {media.type}</p>
        </div>
        <div className="sm-col-2">
          <button type="button" className="btn btn-danger" onClick={async (event) => await onClick(event, media.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};

Media.propTypes = {
  onClick: PropTypes.func.isRequired,
  media: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired
};

export default Media;