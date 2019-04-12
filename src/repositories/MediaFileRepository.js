import csClient from '../clients/ContentServerClient';

const MediaFileRepository = {
    get: async () => {
        const mediaPaths = await csClient.findMediaFiles();
        if (mediaPaths === null || mediaPaths === undefined) {
            return [];
        } else {
            return mediaPaths;
        }
    },
};

export default MediaFileRepository;