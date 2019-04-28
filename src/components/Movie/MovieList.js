import React from 'react';
import { PropTypes } from 'prop-types';

import './MovieList.css';

const MovieList = (props) => {
  const movies = [...props.movies, ...props.movies];

  if(movies === undefined || movies.length === 0)
    return <h1>No Movies</h1>;

  const parent = "accordion";

  const formatedMovies = movies.map((movie, index) => {
    const collapseClass = "collapse-" + index;
    const collapseId = "#" + collapseClass;
    const headingId = "heading-" + index;
    return (
      <div className="card" key={index}>
        <div className="card-header" id={headingId}>
          <h5 className="mb-0" style={{display: "inline"}}>
            <button type="button" className="btn btn-link" data-toggle="collapse" data-target={collapseId} aria-expanded="false" aria-controls={collapseClass}>
              {movie.name}
            </button>
          </h5>
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
  
        <div id={collapseClass} className="collapse show" aria-labelledby={headingId} data-parent={"#" + parent}>
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
  });

  return <div id={parent} className="accordion">{formatedMovies}</div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
};

export default MovieList;