'use strict';

const {
    run,
    series,
    parallel,
} = require('madrun');

module.exports = {
    "test": () => "tape test/*.js",
    "watcher": () => "nodemon -w test -w lib --exec",
    "watch:test": () => run('watcher', 'npm test'),
    "watch:coverage": () => run('watcher', 'npm run coverage'),
    "lint": () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    "build": async () => await run([
        'clean',
        'init',
        '6to5',
        'legacy:*',
        'bundle',
        'minify',
    ]),
    "init": () => "mkdirp dist legacy",
    "minify": () => "minify dist/itchy.js > dist/itchy.min.js",
    "wisdom": () => run('build'),
    "clean": () => "rimraf legacy dist",
    "coverage": () => 'c8 npm test',
    "report": () => 'c8 report --reporter=text-lcov | coveralls',
    "6to5": () => "buble lib -o legacy/lib",
    "legacy:index": () => "echo \"module.exports = require('./lib/itchy');\" > legacy/index.js",
    "bundle:base": () => "browserify -s itchy --ng false",
    "bundle": () => run('bundle:base', '-r ./legacy/lib/itchy.js:itchy ./legacy/lib/itchy.js -o dist/itchy.js'),
};
