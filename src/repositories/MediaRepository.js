import axios from 'axios';
import { bffUrl } from '../config';

const MediaRepository = {
  list: async () => {
    try {
      const url = bffUrl + '/api/media'
      const res = await axios.get(url);
      return res.data;
    } catch(e) {
      console.log(e);
    }
  },

  add: async (media) => {
    try {
      const url = bffUrl + '/api/media';
      const res = await axios.post(url, media);
      return res.data;
    } catch(error) {
      console.log(error);
    }
  },

  delete: async (mediaId) => {
    try {
      const url = bffUrl + '/api/media/' + mediaId;
      const res = await axios.delete(url);
      return await res.data
    } catch(error) {
      console.log(error);
    }
  },
};

export default MediaRepository;