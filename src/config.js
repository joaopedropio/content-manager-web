const domain = process.env.BFF_DOMAIN || 'localhost';
const port = process.env.BFF_PORT || '5000';
const url = `http://${domain}:${port}`;

module.exports.url = url;