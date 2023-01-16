'use strict';

const curriedMultiply = x => y => x*y;

console.log(curriedMultiply(2)(3));

// partially applied functions are a common use of currying

const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Hello World');

// another common use of currying is function composition
// allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
  console.log('saving curtomer info...')
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`)
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`)
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder) // returns an anonymous function
completeOrder = (addCustomer(completeOrder));
completeOrder('1000');

// requires a function with a fixed number of parameters
// outer function `curry` is a wrapper
const curry = (fn) => {
  return curried = (...args) => {
    // compares function length to parameters
    if (fn.length !== args.length) {
      return curried.bind(null, ...args); // bind creates new function
    }
    return fn(...args);
  };
}

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));