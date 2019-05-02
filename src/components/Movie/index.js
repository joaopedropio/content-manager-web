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

  sendMovie = async () => {
    const movie = {
      name: "piratas do caribe",
      // coverImage: {
      //   id: 3
      // },
      country: undefined,
      releaseDate: undefined,
      studio: undefined,
    
      synopsis: undefined,
      shortDescription: undefined,
      duration: undefined,
      budget: undefined,
      video: {
        id: 1
      },
      professionals: undefined
    }

    const movies = await MovieRepository.add(movie);

    this.setState({
      movies: movies
    });
  } 

  render() {

    const { movies } = this.state;

    if(movies === []) 
      return <h1>No movies available</h1>;

    return (
      <div>
        <div>
          <button type="button" onClick={this.sendMovie}>POST</button>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="jumbotron col-12">
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="jumbotron col-6">
              <MovieForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;