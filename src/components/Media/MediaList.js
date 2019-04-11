import React from 'react';
import PropTypes from 'prop-types';

const MediaList = (props) => {
  const { medias } = props;
  return (
    <div>
      {medias.map((media) => {
          return (
            <div key='media.id'>
              <p>{media.name}</p>
              <p>{media.description}</p>
              <p>{media.path}</p>
              <p>{media.type}</p>
            </div>
          );
      })}      
    </div>
  );
};

MediaList.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired
};

export default MediaList;