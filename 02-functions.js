

console.log('traditional function: ', sum(2, 3)); // traditional function is hoisted to top (even it is defined later)

// traditional function
function sum(a, b) {
    return a * b;
}


// console.log(' arrow function does not support hoisting', sum2(1, 2)); // this line will crash usually (real world project often involves transpiler, to hoist arrow function)

// arrow function
const sum2 = (a, b) => {
    return a + b;
};
console.log('arrow function: ', sum2(2, 3));

// arrow function implicit return
const sum3 = (a, b) => a + b;
console.log('arrow function implicit return >', sum3(2, 3));

// function return another function
const multiply = factor => {
    return x => factor * x;
}

const double = multiply(2)
const triple = multiply(3)

console.log('doubling 3 >', double(3))
console.log('tripling 4 >', triple(4))

