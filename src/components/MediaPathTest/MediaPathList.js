import React, { Component } from 'react';
import MediaPath from './MediaPath';
import mfRepo from '../../repositories/MediaFileRepository';

class MediaPathList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mediaPaths: []
    };

    this.displayName = 'Media Component';
  }

  componentDidMount = async () => {
    const mediaPaths = await mfRepo.get();
    this.setState({
      mediaPaths: mediaPaths
    })
  }

  render() {
    const { mediaPaths } = this.state;

    if(mediaPaths.length === 0)
      return <p>Loading...</p>

    return (
      <div>
        {
          mediaPaths.map(value => {
            return (
              <ul className="list-group" key={value}>
                <MediaPath 
                  path={value}
                />
              </ul>
            );
          })
       }
      </div>
    );
  }
}

export default MediaPathList;