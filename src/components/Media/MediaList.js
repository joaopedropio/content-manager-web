import React from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const MediaList = (props) => {
  const { medias } = props;

  return (
    <div className="jumbotron">
    
      <ul className="list-group">
        {
          medias.map((media) => {
            return (
              <div key={media.id}>
                <Media onClick={props.onClick} media={media} />
              </div>
          )})
        }
      </ul>
    </div>
  );
}

MediaList.propTypes = {
  onClick: PropTypes.func.isRequired,
  medias: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired
};

export default MediaList;