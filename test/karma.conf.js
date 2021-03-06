module.exports = function (config) {
	config.set({
		basePath : '',
		autoWatch : true,
		frameworks: ['jasmine'],
		browsers : ['PhantomJS'],
		plugins : [
			'karma-spec-reporter',
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-coverage',
			'karma-notify-reporter'
		],
		preprocessors: {
			'../src/*.js': ['coverage']
    	},
		reporters : ['spec', 'coverage', 'notify'],
		coverageReporter: {
			type : 'lcov',
			dir : 'coverage/',
			subdir: function(browser) {
				// return browser.toLowerCase().split(/[ /-]/)[0];
				return 'lcov';
			}
		},

	});
};