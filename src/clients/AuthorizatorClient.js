import axios from 'axios';
import { authorizatorUrl as endpoint } from '../config';

const AuthorizatorClient = {
    find: async (username) => {
        try {
            const res = await axios.get(endpoint + '/admin/' + username);
            return await res.data;
        } catch(error) {
            console.log(error);
            // if(res.status === 404)
            //     return undefined;
        
            // if(res.status === 500)
            //     throw new Error('Something went wrong within server');
        }
    },

    add: async (username) => {
        const res = await axios.post(endpoint + '/admin/' + username);
        if(res.status !== 201)
            throw new Error('Something went wrong within server');
    }
}

export default AuthorizatorClient;