Package.describe({
  name: 'ca333:bitcoinjs',
  version: '1.5.9',
  summary: 'Pure JS bitcoin library',
  git: 'https://github.com/ca333/bitcoinjs-lib',
  documentation: 'README.md'
});

Npm.depends({'bitcoinjs-lib': '1.5.7'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('bitcoinjs');
  api.addFiles('bitcoinjs.js',"server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ca333:bitcoinjs');
  api.addFiles('bitcoinjs-tests.js',"server");
});
