module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['phantomjs-shim', 'jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts'
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        noImplicitAny: true,
        noImplicitReturns: true,
        noImplicitThis: true,
        allowSyntheticDefaultImports: true,
        // Compilation target is ES5 but some ES2015 features are enabled using shim.
        // Tell the compiler that those newer features are available.
        lib: ['DOM', 'ES5', 'ScriptHost', 'ES2015.Core', 'ES2015.Iterable']
      }
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}
