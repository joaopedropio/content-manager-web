/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerHelper from './PlayerHelper';
import { contentServerUrl } from '../../config';
import authService from '../../services/AuthService';

class Player extends Component {

  constructor(props){
    super(props);

    const { path } = this.props;

    this.state = {
      path: path, 
      player: undefined,
      token: undefined
    }
  }

  componentDidMount = async() => {
    await this.updateToken();

    let { player, token, path} = this.state;

    if(path !== '' && token !== undefined ) {
      const videoUrl = contentServerUrl + path;

      this.playVideo(player, videoUrl, token);
    }
  }

  updateToken = async () => {
    let { token } = this.state;

    if(token === undefined) {
      token = await authService.authenticate();
  
      this.setState({
        token: token,
      });
    }
  }

  playVideo = (player, videoUrl, token) => {
    if(player !== undefined)
      player.reset();

    const newPlayer = PlayerHelper.create(videoUrl, token, '#video');
  }

  render() {

    let { player, token } = this.state;

    let { path } = this.props;

    const videoUrl = contentServerUrl + path;

    if(path !== '')
      this.playVideo(player, videoUrl, token);
    return (
      <video
        id="video"
        width="640"
        height="360"
        crossOrigin="anonymous"
        controls
      />
    );
  }
}

Player.propTypes = {
  path: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return state.path
};

export default connect(mapStateToProps)(Player);
