BitcoinJS-lib
=======

The pure JavaScript Bitcoin library for node.js and browsers packed for meteor. A continued implementation of the original 0.1.3 version used by over a million wallet users; the backbone for almost all Bitcoin web wallets in production today.

## Features

- Clean: Pure JavaScript, concise code, easy to read.
- Tested: Coverage > 90%, third-party integration tests.
- Careful: Two person approval process for small, focused pull requests.
- Compatible: Works on Node.js and all modern browsers.
- Powerful: Support for advanced features, such as multi-sig, HD Wallets.
- Secure: Strong random number generation, PGP signed releases, trusted developers.
- Principled: No support for browsers with crap RNG (IE < 11)
- Standardized: Node community coding style, Browserify, Node's stdlib and Buffers.
- Fast: Optimized code, uses typed arrays instead of byte arrays for performance.
- Experiment-friendly: Bitcoin Mainnet and Testnet support.
- Altcoin-ready: Capable of working with bitcoin-derived cryptocurrencies (such as Dogecoin).

## Get Started

```
meteor add ca333:bitcoinjs
```

Using it in Meteor:

```javascript
var key = bitcoinjs.ECKey.makeRandom();       //generate random ECKey
console.log(key.toWIF());                     //print WIF-format
console.log(key.pub.getAddress().toString()); //print pubAddress
```

## Documentation

Refer to the original [bitcoinJS website](http://bitcoinjs.org/)
and [code-references](https://github.com/bitcoinjs/bitcoinjs-lib/tree/master/test)
