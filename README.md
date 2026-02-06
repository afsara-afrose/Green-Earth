# Green-Earth

1) What is the difference between var, let, and const?

Ans:
 **var** is the old way of declaring variables. It has function scope and can be re-declared and re-assigned. This can cause unexpected bugs, so it is not recommended anymore.

 **let** is a modern way to declare variables. It has block scope (works only inside `{}`) and cannot be re-declared, but its value can be changed.

 **const** is also block scoped, but once a value is assigned, it cannot be changed. It is used when the value should remain constant.


2) What is the difference between map(), forEach(), and filter()?

 **map()** is used when we want to create a new array by changing each element of the original array.
 **forEach()** is used only to loop through the array. It does not return anything.
 **filter()** is used to create a new array that contains only elements that match a specific condition.

3) What are arrow functions in ES6?

Ans:
Arrow functions are a shorter and cleaner way to write functions in JavaScript.

They reduce the amount of code and make functions easier to read. Arrow functions are mostly used in callbacks and array methods like `map()` and `filter()`.

Another important feature of arrow functions is that they do not have their own `this` keyword, which helps avoid confusion in many cases.

4) How does destructuring assignment work in ES6?

Destructuring assignment allows us to extract values from objects or arrays and store them in variables easily.

Instead of accessing values one by one, destructuring lets us write cleaner and more readable code. It is commonly used when working with objects, API responses, or arrays.

5) Explain template literals in ES6. How are they different from string concatenation?
 
Template literals are used to create strings in a more flexible and readable way.

They use backticks (`` ` ``) instead of quotes and allow variables and expressions to be written directly inside strings using `${}`.
