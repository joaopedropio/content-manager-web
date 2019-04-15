import React, { Component } from 'react';
import MediaRepository from '../../repositories/MediaRepository';
import MediaList from './MediaList';
import MediaForm from './MediaForm';

class MediaMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      medias: undefined
    };
  }

  onHandleSubmit = async (event, media) => {
    event.preventDefault();
    const medias = await MediaRepository.add(media);

    this.setState({
      medias: medias
    });
  }

  onDelete = async (event, mediaId) => {
    event.preventDefault();
    const medias = await MediaRepository.delete(mediaId);

    this.setState({
      medias: medias
    });
  }

  componentDidMount = async () => {
    const medias = await MediaRepository.list();

    this.setState({
      medias: medias
    });
  }

  render = () => {

    const { medias } = this.state;
    
    let mediaList;
    if (medias === undefined) {
      mediaList = <h1>Loading ...</h1>
    } else if (medias.length === 0) {
      mediaList = <h1>There is no media saved.</h1>
    } else {
      mediaList = <MediaList onClick={this.onDelete} medias={medias} />
    }

    const style = {
      textAlign: 'center'
    }
  
    return (
      <div style={style}>
        {mediaList}
        <MediaForm onHandleSubmit={this.onHandleSubmit} />
      </div>
    );
  }
}

export default MediaMain;