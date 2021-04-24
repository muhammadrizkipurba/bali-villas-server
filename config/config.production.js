require('dotenv').config();
const config = require('./config.global');

config.email = {
  service: '',
  auth: {
    user: '',
    pass: ''
  }
};
config.documents = process.env.DOCUMENT ? process.env.DOCUMENT : 'public/document';
config.domain = 'https://penggilingan.rizkipurba.id/api'; // API domain 
config.domain_crm = 'https://penggilingan.rizkipurba.id'; // CRM domain
config.port = 3007;
config.db = 'penggilingan';

module.exports = config;