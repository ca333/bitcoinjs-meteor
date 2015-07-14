'use strict';

Tinytest.add('bitcoinjs.is', function (test) {
  var key = bitcoinjs.ECKey.makeRandom();
  test.instanceOf(key, bitcoinjs.ECKey, 'Instantiation OK');
});
