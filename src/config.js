const domain = process.env.BFF_DOMAIN || 'localhost';
const port = process.env.BFF_PORT || '5000';

export const url = `http://${domain}:${port}`;