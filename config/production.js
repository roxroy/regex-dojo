console.log('Starting app in production mode...');

// Production environment settings
let config = {};

// Pull in production mongo connection string
config.databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:5000/regex';
config.appUrl = 'https://regex-dojo.herokuapp.com';

module.exports = config;
