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
  },

  play: (videoTag, videoUrl, token) => {
    if(window.player !== undefined) {
      window.player.reset();
      window.player = undefined;
    }

    window.player = PlayerHelper.create(videoUrl, token, videoTag);
  }
}

export default PlayerHelper;