import axios from 'axios';
import { url } from '../../config';
import moment from 'moment';


export default class PersonRepository {
    
    constructor(persons) {
        this.persons = persons;
    }
    
    getAll = async () => {
        let res = await axios.get(url + '/api/person');
        let data = await res.data;
        return (data === undefined) ? [] : data;
    }

    find = async (id) => {
        const res = await axios.get(url + '/api/person/' + id);
        const person = await res.data;
        return {
            id: person.id,
            name: person.name,
            birthday: moment(person.birthday, 'DD-MM-YYYY'),
            nationality: person.nationality
        };
    }

    add = async (person) => {
        const p = {
            name: person.name,
            birthday: moment(person.birthday).format('DD-MM-YYYY'),
            nationality: person.nationality,
        }

        await axios.post(url + '/api/person', p)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    remove = async (id) => {
        await axios.delete(url + '/api/person/' + id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }
}