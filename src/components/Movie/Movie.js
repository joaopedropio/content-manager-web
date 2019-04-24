import React, { Component } from 'react';
import MovieRepository from '../../repositories/MovieRepository';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    const movies = await MovieRepository.list();

    this.setState({
      movies: movies
    })
  }

  render() {

    const { movies } = this.state;

    if(movies === []) 
      return <h1>No movies available</h1>;

    return (
      <div>
        <MovieList movies={movies} />
        <MovieForm />
      </div>
    );
  }
}

export default Movie;