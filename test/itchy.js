'use strict';

const tryCatch = require('try-catch');
const test = require('supertape');
const itchy = require('..');
const empty = () => {};

test('itchy: args: array', (t) => {
    const [error] = tryCatch(itchy);
    
    t.equal(error.message, 'array should be an array!', 'should throw when no arguments');
    t.end();
});

test('itchy: args: iterator', (t) => {
    const [error] = tryCatch(itchy, []);
    
    t.equal(error.message, 'iterator should be a function!', 'should throw when iterator not a function');
    t.end();
});

test('itchy: args: done', (t) => {
    const [error] = tryCatch(itchy, [], empty);
    
    t.equal(error.message, 'done should be a function!', 'should throw when done is not a function');
    t.end();
});

test('itchy: iterator', (t) => {
    const value = 1;
    const array = [value];
    const iterator = (n) => {
        t.equal(value, n, 'should call iterator');
        t.end();
    };
    
    itchy(array, iterator, empty);
});

test('itchy: done', (t) => {
    const array = [];
    const done = () => {
        t.pass('should call done');
        t.end();
    };
    
    itchy(array, empty, done);
});
