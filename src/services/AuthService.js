import publicIp from 'public-ip';
import authRepo from '../repositories/AuthRepository';

const createAuthentication = async (username) => {
  await authRepo.add(username);
  const auth = await authRepo.find(username);
  return auth.token;
}

const AuthService = {
  authenticate: async () => {
      const ip = await publicIp.v4();
      const username = `contentmanagerweb-{ip}`;
      let auth = await authRepo.find(username);
  
      if(auth === undefined || auth.ipadress !== ip) {
        return await createAuthentication(username);
      }

      return auth.token;
  }
}

export default AuthService;