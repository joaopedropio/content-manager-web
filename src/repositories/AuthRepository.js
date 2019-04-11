import client from '../clients/AuthorizatorClient';

const AuthRepository = {
    find: async (username) => await client.find(username),
    add: async (username) => await client.add(username),
}

export default AuthRepository;