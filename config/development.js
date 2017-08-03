console.log('Starting app in development mode...');

// Dev environment settings
let config = {};

config.seed = true;
config.databaseUrl = 'mongodb://localhost:5000/regex';

module.exports = config;
