console.log('Starting app in production mode...');

// Production environment settings
let config = {};

// Pull in production mongo connection string
config.databaseUrl = process.env.MONGO_URI || 'mongodb://localhost:5000/regex';

module.exports = config;
