import React, { Component } from 'react';
import csClient from '../../clients/ContentServerClient';

export default class MediaFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPaths: [],
    };
    this.getMediaFilesPaths = this.getMediaFilesPaths.bind(this);
  }

  componentDidMount = async () => {
    await this.getMediaFilesPaths();
  }

  getMediaFilesPaths = async () => {
    const mediaPaths = await csClient.findMediaFiles();
    if (mediaPaths === null || mediaPaths === undefined) {
      this.setState({ mediaPaths: [] });
    } else {
      this.setState({ mediaPaths: mediaPaths });
    }
  }

  render() {
    const { mediaPaths } = this.state;

    return (
      <div>
        <h1>Arquivos de Media</h1>
        {
          (mediaPaths.map(value => (
            <div className="card" key={value}>
              <p>{value}</p>
            </div>
          )))
        }
      </div>
    );
  }
}
