// eslint-disable-next-line
const domain = (process.env.REACT_APP_DEV) ? 'localhost' : '${BFF_DOMAIN}';
// eslint-disable-next-line
const port = (process.env.REACT_APP_DEV) ? '5000' : '${BFF_PORT}';

export const url = `http://${domain}:${port}`;