import axios from 'axios';
import { url } from '../../config';

export default class PersonRepository {
    
    constructor(persons) {
        let person = {
            id: 0,
            name: 'Tom Hanks',
            nationality: 'eua'
        }
        if (persons === undefined){
            this.persons = [person];
        } else {
            this.persons = persons;
        }
    }
    
    getAll = async () => {
        let res = await axios.get(url + '/api/person');
        let data = await res.data;
        return (data === undefined) ? [] : data;
        //return this.persons;
    }

    find = async (id) => {
        let res = await axios.get(url + '/api/person/' + id);
        return await res.data;
        //return this.persons.find((person) => person.id === id);
    }

    add = async (person) => {
        await axios.post(url + '/api/person', { ...person })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        //this.persons = [...this.persons, person];
    }

    remove = async (id) => {
        await axios.post(url + '/api/person/' + id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        //this.persons = this.persons.filter((person) => person.id !== id);
    }
}