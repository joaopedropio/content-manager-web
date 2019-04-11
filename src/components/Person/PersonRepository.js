import axios from 'axios';
import { url } from '../../config';

export default class PersonRepository {
  constructor(persons) {
    this.persons = persons;
    this.displayName = 'Person Repository';
  }

  getAll = async () => {
    const res = await axios.get(`${url}/api/person`);
    const data = await res.data;
    return (data === undefined) ? [] : data;
  }

  find = async (id) => {
    const res = await axios.get(`${url}/api/person/${id}`);
    const person = await res.data;
    return {
      id: person.id,
      name: person.name,
      birthday: new Date(person.birthday),
      nationality: person.nationality,
    };
  }

  add = async (person) => {
    await axios.post(`${url}/api/person`, person)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  remove = async (id) => {
    await axios.delete(`${url}/api/person/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
}
