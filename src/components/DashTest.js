import React, { Component } from 'react';
import dashjs from 'dashjs';
//const { url } = require('../config');

export default class DashTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manifestUrl: "",
            authorization: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.setupManifestUrl = this.setupManifestUrl.bind(this);
        this.setupVideo = this.setupVideo.bind(this);
    }

    setupManifestUrl(event) {
        event.preventDefault();
    
        var video = document.getElementById('video');
        var source = document.createElement('source');
    
        source.setAttribute('src', this.state.manifestUrl);
        source.setAttribute('type', 'application/dash+xml');
    
        video.appendChild(source);
        this.setupVideo(this.state.manifestUrl, this.state.authorization, '#video');
    }

    setupVideo(url, auth, videoTag) {
        var player = dashjs.MediaPlayer().create();
        player.extend("RequestModifier", () => {
            return {
                modifyRequestHeader: xhr => {
                    xhr.setRequestHeader("Authorization", auth);
                    return xhr;
                }
            };
        },
            true
        );
        player.initialize(document.querySelector(videoTag), url, true);
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <div className="fri">
                    <div>
                        <p>URL do manifesto</p>
                        <input type="text" name="manifestUrl" value={this.state.manifestUrl} onChange={this.handleChange} /> 
                    </div>
                <div>
                    <p>Autorização</p>
                    <input type="text" name="authorization" value={this.state.authorization} onChange={this.handleChange} />
                </div>
                <input type="button" name="button" onClick={this.setupManifestUrl} value="Play" />
                </div>
                <div>
                    <video id="video" width="640" height="360" crossOrigin="anonymous" controls></video>
                </div>
            </div>
        )
    }
}