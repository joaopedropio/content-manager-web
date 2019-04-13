import publicIp from 'public-ip';
import authRepo from '../repositories/AuthRepository';

const AuthService = {
  authenticate: async () => {
      const ip = await publicIp.v4();
      const username = `contentmanagerweb-{ip}`;
      let auth = await authRepo.find(username);
  
      if(auth === undefined || auth.ipadress !== ip) {
        auth = await authRepo.add(username);
      }

      const token = auth.token

      return token;
  }
}

export default AuthService;