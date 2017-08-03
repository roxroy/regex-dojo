const config = require ('../../config')

module.exports = {
	'githubAuth': {
		'clientID': process.env.GITHUB_KEY,
		'clientSecret': process.env.GITHUB_SECRET,
		'callbackURL': config.appUrl + '/auth/github/callback'
	}
};
