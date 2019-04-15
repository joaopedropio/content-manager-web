import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MediaForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      type: '',
      path: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render = () => {

    const media = { ...this.state };

    const { onHandleSubmit } = this.props;

    return (
      <div className="panel">
        <div className="panel-body">
          <form onSubmit={event => onHandleSubmit(event, media)}>
            <p>Name:</p>
            <input type="text" name="name" value={media.name} onChange={this.onChange} />
            <p>Description:</p>
            <input type="text" name="description" value={media.description} onChange={this.onChange} />
            <p>Path:</p>
            <input type="text" name="path" value={media.path} onChange={this.onChange} />
            <p>Type:</p>
            <input type="number" name="type" value={media.type} onChange={this.onChange} />
            <div>
              <input type="submit" className="btn btn-success" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

MediaForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default MediaForm;