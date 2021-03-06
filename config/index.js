let config = {};


if (process.env.NODE_ENV != 'production') require('dotenv').load();

// ---------------------------------------------------------------
// Config values common across environments (overridable defaults)
// ---------------------------------------------------------------

// HTTP port for Express
config.port = process.env.PORT || 3000;
config.appUrl = 'http://localhost:' + config.port;

// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environmentSettings = {};
switch (process.env.NODE_ENV) {
  case 'production': environmentSettings = require('./production'); break;
  case 'test': environmentSettings = require('./test'); break;
  default: environmentSettings = require('./development'); break;
}
config = Object.assign(config, environmentSettings);

// ---------------------------------------
// Override with user settings, if present
// ---------------------------------------
try {
  let userSettings = require('./user');
  config = Object.assign(config, userSettings);
} catch(e) {
  // nbd if we don't have user settings
}

// Export final configuration object
module.exports = config;
