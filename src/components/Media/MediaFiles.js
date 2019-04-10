import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../config';

export default class MediaFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPaths: [],
    };
    this.getMediaFilesPaths = this.getMediaFilesPaths.bind(this);
  }

  async componentDidMount() {
    await this.getMediaFilesPaths();
  }

  async getMediaFilesPaths() {
    const api = `${url}/mediafiles`;

    const res = await axios.get(api);

    const data = await res.data;
    if (data === null || data === undefined) {
      this.setState({ mediaPaths: [] });
    } else {
      this.setState({ mediaPaths: data });
    }
  }

  render() {
    const { mediaPaths } = this.state;

    return (
      <div>
        <h1>Arquivos de Media</h1>
        {
          (mediaPaths.map((value, index) => (
            <div className="card" key={index}>
              <p>{value}</p>
            </div>
          )))
        }
      </div>
    );
  }
}
