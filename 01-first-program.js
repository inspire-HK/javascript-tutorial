// output to stdin
console.log('Hello World')


// statement (or assignment, result is stored somewhere)
let a1 = 123;
let a2 = 456;

// expression (result is not saved)
console.log('a1 equals to a2? ', a1 == a2);


// var vs let vs const
// var is old syntax, "should" avoid using it, var is "global scope"
let c = 1;
c = 2; // "let" is "mutable", could be re-assigned
console.log('c is now: ', c);

const d = 1; // "const" makes variable immutable
// d = 2; // this line will yield error, d is a constant immutable
console.log(d);

// variable & function naming convention:
// naming convention (variable & function name)
// javascript prefers camelCase, e.g. studentCount, multiplyByTwo()
// python prefers snake_case, e.g. student_count, multiply_by_two()
// Pascal_Case, e.g. My_Name
// all capital CONSTANTS