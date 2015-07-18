module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],

    files: [
      'static/js/vendor.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/rosie/src/rosie.js',
      'src/javascripts/**/*.coffee',
      'specs/factories/*.coffee',
      'specs/unit/**/*.coffee'
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: false
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,

    browsers: ['PhantomJS']
  })
}
