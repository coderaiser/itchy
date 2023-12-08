# itchy [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Drop-in replacement of [async.eachSeries][eachSeries].

## Install

`npm i itchy --save`

## API

### itchy(array, iterator, done)

```js
const itchy = require('itchy');

const iterator = (n, fn) => {
    console.log(n);
    fn();
};

itchy([1, 2, 3], iterator, (error) => {
    console.log(error || 'done');
});
```

## Environments

For using in browser without `browserify`, `webpack` or `rollup` path `node_modules/itchy/dist/itchy.min.js` could be used.

## License

MIT

[NPMIMGURL]: https://img.shields.io/npm/v/itchy.svg?style=flat
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/itchy/master.svg?style=flat
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]: https://npmjs.org/package/itchy "npm"
[BuildStatusURL]: https://travis-ci.org/coderaiser/itchy "Build Status"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]: https://coveralls.io/github/coderaiser/itchy?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/itchy/badge.svg?branch=master&service=github
[eachSeries]: http://caolan.github.io/async/docs.html#eachSeries
