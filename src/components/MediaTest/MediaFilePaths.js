import React, { Component } from 'react';
import mfRepo from '../../repositories/MediaFileRepository';
import { contentServerUrl } from '../../config';
import PlayerHelper from './PlayerHelper';

class MediaFilePaths extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: undefined,
      mediaPaths: [],
    };
  }

  componentDidMount = async () => {
    const mediaPaths = await mfRepo.get();
    this.setState({
      mediaPaths: mediaPaths
    })
  }

  playVideo = (videoUrl) => {
    let { player } = this.state;

    if(player !== undefined)
      player.reset();

    const newPlayer = PlayerHelper.create(videoUrl, this.token, '#video');

    this.setState({
      player: newPlayer
    });
  }

  render() {
    const { mediaPaths } = this.state;

    return (
      <div>
        <h1>Arquivos de Media</h1>
        {
          (mediaPaths.map(value => (
            <div className='card' key={value}>
              <p>{value}</p>
              <button type='button' onClick={() => this.playVideo(contentServerUrl + value)}>Play</button>
            </div>
          )))
        }
      </div>
    );
  }
}

export default MediaFilePaths;
