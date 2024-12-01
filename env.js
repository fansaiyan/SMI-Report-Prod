(function(window) {
	let path = window.location.protocol + '//' + window.location.hostname;
	window.__env = window.__env || {};

	// API url
	// window.__env.url = path + ':8069/';
	// window.__env.db = 'rmi-survey';

	window.__env.url = 'http://103.67.78.249/';
	window.__env.db = 'rmi';

	// Whether or not to enable debug mode
	// Setting this to false will disable console output
	window.__env.enableDebug = true;
})(this);
