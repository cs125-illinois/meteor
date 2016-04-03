Package.describe({
  summary: "Random number generator and utilities",
  version: '1.0.8-rc.3'
});

Package.onUse(function (api) {
  api.use('underscore');
  api.use('ecmascript');
  api.export('Random');
  api.addFiles('random.js');
  api.addFiles('deprecated.js');
});

Package.onTest(function(api) {
  api.use('random');
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles('random_tests.js', ['client', 'server']);
});
