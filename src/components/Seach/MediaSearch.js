import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MediaRepository from '../../repositories/MediaRepository';

class MediaSearch extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      medias: undefined
    };
  }

  componentDidMount = async () => {
    const medias = await MediaRepository.list();

    this.setState({
      medias: medias
    });
  }

  render() {

    const { medias } = this.state;
    const { id } = this.props;

    if(medias === undefined)
      return <h1>Loading...</h1>;

    if (medias.length === 0)
      return <h1>No medias</h1>;

    const options = medias.map((media) => <option key={media.id} value={media.id}>{media.name}</option>);

    return <select id={id} className="selectpicker" data-live-search="true">{options}</select>;
  }
}

MediaSearch.defaultProps = {
  id: "MediaSearchTag"
}

MediaSearch.propTypes = {
  id: PropTypes.string
}

export default MediaSearch;