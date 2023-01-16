# Function Currying

- An advanced technique of working with functions.
- Takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions
- A curried function only takes one parameter at a time
- It keeps returning a new function (that expects the current argument, like we said earlier) until all the arguments are exhausted. The arguments are kept "alive" via closure and all are used in execution when the final function in the currying chain is returned and executed

Why is it useful?

- Helps us avoid passing the same variable again and again
- Helps create a higher order function

Example:

``` js
const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
  }
}

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato')

// refactor:

const buildSammy = ingred1 => ingred2 => ingred3 =>
  `${ingred1}, ${ingred2}, ${indred3}`;

const mySammy = buildSammy('Turkey')('Cheese')('Bread');
```

## References

- [Everything about Currying in JavaScript](https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339)
- [How to Curry Functions](https://www.youtube.com/watch?v=I4MebkHvj8g)
