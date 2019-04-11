import axios from 'axios';
import { bffUrl } from '../config';

const PersonRepository = {

  getAll: async () => {
    const res = await axios.get(`${bffUrl}/api/person`);
    const data = await res.data;
    return (data === undefined) ? [] : data;
  },

  find: async (id) => {
    const res = await axios.get(`${bffUrl}/api/person/${id}`);
    const person = await res.data;
    return {
      id: person.id,
      name: person.name,
      birthday: new Date(person.birthday),
      nationality: person.nationality,
    };
  },

  add: async (person) => {
    await axios.post(`${bffUrl}/api/person`, person)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  },

  remove: async (id) => {
    await axios.delete(`${bffUrl}/api/person/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  },
}

PersonRepository.displayName = 'Person Repository';

export default PersonRepository;