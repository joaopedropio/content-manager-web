import React from 'react';

const MovieList = (props) => {
  const { movies } = props;

  if(movies === undefined || movies.length === 0)
    return <h1>No Movies</h1>;

  const formatedMovies = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <p>movie.name</p>
        <p>movie.coverImage</p>
        <p>movie.country</p>
        <p>movie.releaseDate</p>
        <p>movie.studio</p>
        <p>movie.synopsis</p>
        <p>movie.shortDescription</p>
        <p>movie.duration</p>
        <p>movie.budget</p>
        <p>movie.video</p>
        <p>movie.professionals</p>
      </div>
    );
  });

  return <div>{formatedMovies}</div>;
};

export default MovieList;