# Promises

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Depending on the outcome of the asynchronous operation, promises can be in three states:

1. Pending: set initially, while the asynchronous operation is in progress
2. Fulfilled: the asynchronous operation has finished successfully
3. Rejected: the operation has failed

- When a promise enters either *fulfilled* or *rejected* states, it is said to be *settled*

## How to build a promise?

- Promises are created using the constructor pattern.
- When called via `new` operator, the `Promise` constructor returns a promise object
- The constructor takes one function (the `executor` function)
- The `executor` function accepts two parameters: `resolveFunction` or `rejectFunction`
- `resolveFunction` and `rejectFunction` are callback functions, and can be given whatever names you want, they accept a single parameter of any type
- `resolveFunction(value) // call on resolve` : the `value` parameter can also be another promise object
- `rejectFunction(reason) // call on rejected` : has semantics close to the `throw` statement, so `reason` is typically an error instance.
- Any errors thrown in the `executor` will cause the promise to be rejected, and the return value will be neglected

## Thenables

- All Promise-like objects implement the *Thenable* interface
- A thenable implements the `.then()` method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected
- **Promises are thenables as well**

## References

- [Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Eloquent JavaScript](https://eloquentjavascript.net/11_async.html#:~:text=Asynchronous%20programming%20makes%20it%20possible,called%20when%20the%20actions%20complete.)
- [Promise() Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Building JavaScript Promises from Scratch](https://itnext.io/broken-promises-a-barely-working-implementation-of-js-promises-ed7f99071f54)
- [Commentary Building Promises from Scratch](https://medium.com/@jamesernator/actually-this-isnt-how-the-javascript-promise-works-ee87bbcbfd28)
- [Learn JavaScript Promises by Building a Custom Implementation](https://codefrontend.com/promises/)