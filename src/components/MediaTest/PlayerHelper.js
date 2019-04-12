import dashjs from 'dashjs';

const PlayerHelper = {
  create: (manifestUrl, token, videoTag) => {
    const player = dashjs.MediaPlayer().create();

    player.extend('RequestModifier', () => ({
      modifyRequestHeader: (xhr) => {
        xhr.setRequestHeader('Authorization', token);
        return xhr;
      },
    }), true);

    player.initialize(document.querySelector(videoTag), manifestUrl, true);
    return player;
  }
}

export default PlayerHelper;