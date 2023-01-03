'use strict';

// utilizing the built-in Promise object
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  setTimeout(() => {
    resolveFunction('Promise Kept');
  }, 100);
});

myPromise.then((value) => {
  console.log(value);
  // expected output: 'Promise Kept'
});

console.log('Promise Object ---->', myPromise);
// expected output: Promise { <pending> }
