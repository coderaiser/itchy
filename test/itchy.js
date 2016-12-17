'use strict';

const test = require('tape');
const itchy = require('..');
const empty = () => {};

test('itchy: args: array', (t) => {
    t.throws(itchy, /array should be an array!/, 'should throw when no arguments');
    t.end();
});

test('itchy: args: iterator', (t) => {
    const fn = () => itchy([]);
    t.throws(fn, /iterator should be a function!/, 'should throw when iterator not a function');
    t.end();
});

test('itchy: args: done', (t) => {
    const fn = () => itchy([], empty);
    t.throws(fn, /done should be a function!/, 'should throw when done is not a function');
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

