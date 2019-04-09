// eslint-disable-next-line
const domain = process.env.BFF_DOMAIN || 'localhost';//'${BFF_DOMAIN}';
const port = process.env.BFF_PORT || '5000';

export const url = `http://${domain}:${port}`;