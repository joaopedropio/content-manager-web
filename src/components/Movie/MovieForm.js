import React, { Component } from 'react';
import MediaSearch from '../Seach/MediaSearch';

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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="coverImage">CoverImage</label>
            <input className="form-control" type="text" id="coverImage" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input className="form-control" type="text" id="country" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>
            <input className="form-control" type="text" id="releaseDate" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="studio">Studio</label>
            <input className="form-control" type="text" id="studio" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <input className="form-control" type="text" id="synopsis" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="shortDescription">Short Description</label>
            <input className="form-control" type="text" id="shortDescription" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input className="form-control" type="text" id="duration" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input className="form-control" type="text" id="budget" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <MediaSearch />
          </div>
          <div className="form-group">
            <label htmlFor="professionals">Professionals</label>
            <input className="form-control" type="text" id="professionals" onChange={this.onChange} />
          </div>
          <button className="btn btn-primary" type="submit" onClick={(event) => this.onSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;