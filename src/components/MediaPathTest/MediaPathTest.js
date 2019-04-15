import React from 'react';
import MediaPathList from './MediaPathList';
import Player from '../Player/Player';

const MediaPathTest = () => {
  const style = {
    textAlign: 'center'
  }

  return (
    <div style={style}>
      <MediaPathList />
      <Player />
    </div>
  );
}

export default MediaPathTest;