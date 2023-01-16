'use strict';

const curriedMultiply = x => y => x*y;

console.log(curriedMultiply(2)(3));

// partially applied functions are a common use of currying

const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

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