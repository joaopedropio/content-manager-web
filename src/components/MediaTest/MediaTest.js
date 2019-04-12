import React, { Component } from 'react';
import MediaFilePaths from './MediaFilePaths';
import Player from './Player';
import authService from '../../services/AuthService';

class MediaTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authorization: undefined,
    };
  }

  componentDidMount = async() => {
    const auth = await authService.authenticate();

    this.setState({
      authorization: auth,
    });
  }

  render() {
    const { authorization } = this.state

    if (authorization === undefined)
      return <p>Loading...</p>

    const { token } = authorization;

    return (
      <div>
        <MediaFilePaths token={token} />
        <Player />
      </div>
    );
  }
}

export default MediaTest;