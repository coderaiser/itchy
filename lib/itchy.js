'use strict';

const isFn = (a) => typeof a === 'function';

module.exports = (array, iterator, done) => {
    check(array, iterator, done);
    
    let i = -1;
    const n = array.length;
    
    const loop = (e) => {
        ++i;
        
        if (e || i === n)
            return done(e);
        
        iterator(array[i], loop);
    };
    
    loop();
};

function check(array, iterator, done) {
    if (!Array.isArray(array))
        throw Error('array should be an array!');
    
    if (!isFn(iterator))
        throw Error('iterator should be a function!');
    
    if (!isFn(done))
        throw Error('done should be a function!');
}
