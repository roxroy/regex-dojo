console.log('Starting app in test mode...');

// Test environment settings
let config = {};

config.databaseUrl = 'mongodb://localhost:5000/regex-test';

module.exports = config;
