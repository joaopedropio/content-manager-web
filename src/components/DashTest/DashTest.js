/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import publicIp from 'public-ip';
import dashjs from 'dashjs';
import authRepo from '../../repositories/AuthRepository';
import { contentServerUrl } from '../../config';

export default class DashTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manifestUrl: contentServerUrl,
      authorization: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.setupManifestUrl = this.setupManifestUrl.bind(this);
  }

  setupManifestUrl = (event) => {
    event.preventDefault();

    const { manifestUrl, authorization } = this.state;

    const video = document.getElementById('video');
    const source = document.createElement('source');

    source.setAttribute('src', manifestUrl);
    source.setAttribute('type', 'application/dash+xml');

    video.appendChild(source);
    this.setupVideo(manifestUrl, authorization, '#video');
  }

  setupVideo = (url, auth, videoTag) => {
    const player = dashjs.MediaPlayer().create();
    player.extend('RequestModifier', () => ({
      modifyRequestHeader: (xhr) => {
        xhr.setRequestHeader('Authorization', auth);
        return xhr;
      },
    }), true);
    player.initialize(document.querySelector(videoTag), url, true);
  }

  componentDidMount = async() => {
    const ip = await publicIp.v4();
    const username = `contentmanagerweb-{ip}`;
    let auth = await authRepo.find(username);

    if(auth === undefined || auth.ipadress !== ip) {
      auth = await authRepo.add(username);
    }

    this.setState({
      manifestUrl: contentServerUrl,
      authorization: auth.token,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      manifestUrl,
      authorization,
    } = this.state;
    return (
      <div>
        <div className="fri">
          <div>
            <p>URL do manifesto</p>
            <input type="text" name="manifestUrl" value={manifestUrl} onChange={this.handleChange} />
          </div>
          <div>
            <p>Autorização</p>
            <input type="text" name="authorization" value={authorization} onChange={this.handleChange} />
          </div>
          <input type="button" name="button" onClick={this.setupManifestUrl} value="Play" />
        </div>
        <div>
          <video id="video" width="640" height="360" crossOrigin="anonymous" controls />
        </div>
      </div>
    );
  }
}
