let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Task [1]
counter--;
my.reverse().splice(zero++, counter++);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// Task [2]
console.log(my.slice(zero, counter--)); // ["Elham", "Mazero"]
// Task [3]
console.log(my[zero--].slice(zero++, ++zero) + my[counter].slice(counter++)); // "Elzero"
console.log(counter)
// Task [4]
console.log(my[zero--].slice(my[zero--].length - ++zero ,my[zero--].length - zero ) + my[zero][zero]); // "rO"
console.log(zero)
console.log(counter)
// سوري ع العك دا بس والله انا مش عارف عملتهاازاي