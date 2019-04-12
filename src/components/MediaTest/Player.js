/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const Player = () => {

    return (
      <div>
        {/* <div className="fri">
          <div>
            <p>URL do manifesto</p>
            <input type="text" name="manifestUrl" value={manifestUrl} onChange={this.handleChange} />
          </div>
          <div>
            <p>Autorização</p>
            <input type="text" name="authorization" value={authorization} onChange={this.handleChange} />
          </div>
          <input type="button" name="button" onClick={this.setupManifestUrl} value="Play" />
        </div> */}
        <div>
          <video id="video" width="640" height="360" crossOrigin="anonymous" controls />
        </div>
      </div>
    );
}

export default Player;
