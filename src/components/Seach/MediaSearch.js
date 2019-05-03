import React, { Component } from 'react';
import MediaRepository from '../../repositories/MediaRepository';
import Select from 'react-select';

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

    if(medias === undefined)
      return <h1>Loading...</h1>;

    if (medias.length === 0)
      return <h1>No medias</h1>;

    const options = medias.map((media) => { return { label: media.name, value: media.name }});

    return (
      <Select
        onChange={this.handleChange}
        options={options}
      />
    );
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
}

export default MediaSearch;