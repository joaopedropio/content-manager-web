import axios from 'axios';
import { bffUrl } from '../config';

const ContentServerClient = {
    findMediaFiles: async () => {
        const api = `${bffUrl}/api/mediafiles`;

        const res = await axios.get(api);
    
        return await res.data;
    }
}

export default ContentServerClient;