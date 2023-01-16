# Function Currying

- An advanced technique of working with functions.
- Takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions
- A curried function only takes one parameter at a time

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
```

## References

- [Everything about Currying in JavaScript](https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339)
- [How to Curry Functions](https://www.youtube.com/watch?v=I4MebkHvj8g)
