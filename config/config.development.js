require('dotenv').config();
const config = require('./config.global');

config.email = {
  service: '',
  auth: {
    user: '',
    pass: ''
  }
};
config.images = process.env.DOCUMENT ? process.env.DOCUMENT : 'public/images';
config.logos = process.env.DOCUMENT ? process.env.DOCUMENT : 'public/logos';
config.domain = 'http://localhost:3001';
config.domain_crm = 'http://localhost:3000';
config.domain_guest = 'http://localhost:3000';
config.port = 3001;
config.db = 'bali_villas';

module.exports = config;
