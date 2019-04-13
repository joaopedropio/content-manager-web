import axios from 'axios';
import { bffUrl } from '../config';

const MediaRepository = {
    find: async () => {
        try {
            return  axios.get(bffUrl + '/medias');
        } catch(e) {
            console.log(e);
        }
    },
};

export default MediaRepository;