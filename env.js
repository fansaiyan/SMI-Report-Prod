(function(window) {
	let path = window.location.protocol + '//' + window.location.hostname;
	window.__env = window.__env || {};

	// API url
	window.__env.url = 'http://train.ermi.online/';

	// Whether or not to enable debug mode
	// Setting this to false will disable console output
	window.__env.enableDebug = true;
})(this);
