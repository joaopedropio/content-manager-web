import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../config';

export default class MediaFiles extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mediaPaths: []
        };
        this.getMediaFilesPaths = this.getMediaFilesPaths.bind(this);
    }

    async componentDidMount() {
        await this.getMediaFilesPaths();
    };

    async getMediaFilesPaths() {
        const api = url + "/mediafiles";

        var res = await axios.get(api);

        let data = await res.data;
        if (data === null || data === undefined){
            this.setState({ mediaPaths: [] });
        } else {
            this.setState({ mediaPaths: data });
        }
    };
    
    render() {
        return(
            <div>
                <h1>Arquivos de Media</h1>
                {
                    (this.state.mediaPaths.map((value, index) => {
                        return(
                            <div className="card" key={index}>
                                <p>{value}</p>
                            </div>
                        );
                    }))
                }
            </div>
        );
    };
}