import React from 'react';
import { PropTypes } from 'prop-types';
import './Movie.css';

const Movie = (props) => {

  const { movie } = props;

  return (
    <div className="movie">
      <div className="card">
        <div className="card-header">{movie.name}</div>
        <div className="card-body">
          <div className="row card-text">
            <p className="col-2">{movie.coverImage}</p>
            <p className="col-2">{movie.country}</p>
            <p className="col-2">{movie.releaseDate}</p>
            <p className="col-2">{movie.studio}</p>
            <p className="col-2">{movie.synopsis}</p>
            <p className="col-2">{movie.shortDescription}</p>
            <p className="col-2">{movie.duration}</p>
            <p className="col-2">{movie.budget}</p>
            <p className="col-2">{movie.video}</p>
            <p className="col-2">{movie.professionals}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    coverImage: PropTypes.string,
    country: PropTypes.string,
    releaseDate: PropTypes.string,
    studio: PropTypes.string,
    synopsis: PropTypes.string,
    shortDescription: PropTypes.string,
    duration: PropTypes.string,
    budget: PropTypes.string,
    video: PropTypes.string,
    professionals: PropTypes.string,
  }))
};

export default Movie;