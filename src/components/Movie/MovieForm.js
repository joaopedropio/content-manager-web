import React, { Component } from 'react';

class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      name: undefined,
      coverImage: undefined,
      country: undefined,
      releaseDate: undefined,
      studio: undefined,
    
      synopsis: undefined,
      shortDescription: undefined,
      duration: undefined,
      budget: undefined,
      video: undefined,
      professionals: undefined
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { movie } = event.target.value;

    this.setState({
      movie: movie
    });

  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form>
          <input type="text" value="Name" onChange={this.onChange} />
          <input type="text" value="Cover Image" onChange={this.onChange} />
          <input type="text" value="Country" onChange={this.onChange} />
          <input type="text" value="Release Date" onChange={this.onChange} />
          <input type="text" value="Studio" onChange={this.onChange} />
          <input type="text" value="Synopsis" onChange={this.onChange} />
          <input type="text" value="Short Description" onChange={this.onChange} />
          <input type="text" value="Duration" onChange={this.onChange} />
          <input type="text" value="Budget" onChange={this.onChange} />
          <input type="text" value="Video" onChange={this.onChange} />
          <input type="text" value="Professionals" onChange={this.onChange} />
          <button type="submit" onClick={(event) => this.onSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;