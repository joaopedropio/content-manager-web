import axios from 'axios';
import { bffUrl } from '../config';

const MovieRepository = {
  list: async () => {
    return await [{
      id: "undefined",
      name: "undefined",
      coverImage: "undefined",
      country: "undefined",
      releaseDate: "undefined",
      studio: "undefined",
    
      synopsis: "undefined",
      shortDescription: "undefined",
      duration: "undefined",
      budget: "undefined",
      video: "undefined",
      professionals: "undefined"
    }];
    // try {
    //   const url = bffUrl + '/api/movie'
    //   const res = await axios.get(url);
    //   return res.data;
    // } catch(e) {
    //   console.log(e);
    // }
  },

  add: async (movie) => {
    try {
      const url = bffUrl + '/api/movie';
      const res = await axios.post(url, movie);
      return res.data;
    } catch(error) {
      console.log(error);
    }
  },

  delete: async (movieId) => {
    try {
      const url = bffUrl + '/api/movie/' + movieId;
      const res = await axios.delete(url);
      return await res.data
    } catch(error) {
      console.log(error);
    }
  },
};

export default MovieRepository;