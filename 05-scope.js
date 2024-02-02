// scope
// https://www.geeksforgeeks.org/lexical-scope-in-javascript/

// console.log('value of a:', a) // this line will crash
console.log('value of b:', b) // this line returns "undefined", but a bad practice

let a = 2; // global scope, all could see this variable
var b = 3; // "var" variables are "hoisting" to top (variable is assigned to undefined initially)

const add = x => { // no parentheses for single parameter
    a = a + 0.5; // "in general", this is bad practice, no long a "pure function"
    return a + x;
};
console.log(`add result: ${add(3)}, a is: ${a} (a is changed)`);

// python print('my name {} my age is {}'.format(name, age))

const increment = 20; // this is global
const add2 = (a) => {
    const increment = 1; // "another" increment is defined locally
    return a + increment;
};
console.log(`add2 result: ${add2(3)} is (3+1): ${increment} (increment is not changed)`);
