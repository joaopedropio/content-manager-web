/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerHelper from './PlayerHelper';
import { contentServerUrl } from '../../config';
import authService from '../../services/AuthService';

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: undefined
    };
  }
  
  componentDidMount = async () => await this.authenticate();

  authenticate = async () => {
    let { token } = this.state;

    if(token === undefined) {
      token = await authService.authenticate();
  
      this.setState({
        token: token,
      });
    }
  }

  render() {

    let { token } = this.state;

    let { path } = this.props;

    const videoUrl = contentServerUrl + path;

    PlayerHelper.play('#video', videoUrl, token);
    
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
