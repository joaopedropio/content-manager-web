import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const { movies } = props;

  if(movies === undefined || movies.length === 0)
    return <h1>No Movies</h1>;

  const formatedMovies = movies.map((movie) => {
    return (
      <Movie movie={movie} key={movie.id} />
    );
  });

  return <div>{formatedMovies}</div>;
};

export default MovieList;