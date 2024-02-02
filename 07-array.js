// Google: MDN Array map

console.log('This line is executed when importing (require) \n')

const fruits = ['apple', 'banana', 'cherry']; // global variable

function basic() {
    console.log('fruits:', fruits, Array.isArray(fruits), fruits.length);

    fruits.push('grape');
    console.log('updated fruits with grape', fruits);

    fruits.pop();
    fruits.unshift('beginning'); // add to beginning
    console.log('After pop & unshift', fruits);

    fruits.shift();
    console.log('"shift" removes the first item', fruits);
}

// referencing
const reference = () => {
    const fruits2 = fruits;
    fruits2.push('new');
    console.log('both arrays are updated', fruits, '>>> ', fruits2); // because they have the same reference (pointer)

    const fruits3 = [...fruits]; // spreading fruits to create fruits3
    fruits3.pop();
    console.log('updating fruits3 does not affect fruits', fruits, fruits3);
}

// basic()
const basicString = () => {
    const array = ['a', 'b', 1, 2];
    console.log(`[${array}].join('-') >> `, array.join('-'));
    console.log(`${array.join(':')}.split(':') >> `, array.join(':').split(':'));

    console.log(`[${array}].includes('b') >>`, array.includes('b'))
    console.log(`[${array}].indexOf('b') >>`, array.indexOf('b'))
}

// at(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
const at = () => {
    const array = [1, 2, 3, 4]
    console.log('at(): ', array.at(1), array.at(-1), array.at(100));
}

// find() & findIndex(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const find = () => {
    const students = [{ name: 'Alex' }, { name: 'Jacky Tsui' }, { name: 'John' }];

    const jacky = students.find(student => student.name.startsWith('Jacky'))
    const jackyIndex = students.findIndex(student => student.name.startsWith('Jacky'))
    console.log('Do have have Jacky here: ', jackyIndex, jacky)

    const alex = students.find(student => student.name === 'alex')
    const alexIndex = students.findIndex(student => student.name === 'alex')
    console.log('Do have have alex here: ', alexIndex, alex)

}

// splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const splice = () => {
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // Replaces 1 element at index 4
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
}

// slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const slice = () => {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // Expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // Expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice());
    // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
}

// flatten()
const flatten = () => {
    const array3D = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11]]]
    console.log('array2D is ', array3D, 'len:', array3D.length)
    console.log('flatten', array3D.flat(), 'len:', array3D.flat().length)
    console.log('flatten twice', array3D.flat().flat(), 'len:', array3D.flat().flat().length)
}


// find() & findIndex():

// sort()()://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sort = () => {
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // Expected output: Array ["Dec", "Feb", "Jan", "March"]

    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // Expected output: Array [1, 100000, 21, 30, 4]

}

// some(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const some = () => {
    const array = [1, 2, 3, 4, 5];

    // Checks whether an element is even (yield true once )
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    // Expected output: true
}

// reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// every(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const reduce = () => {
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
}

// filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filter = () => {
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(n => !(n % 2));
    console.log('even numbers: ', evenNumbers);
}

// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// !Note: NOT execute sequentially
const map = () => {
    const array = [1, 2, 3, 4, 5];
    const doubled = array.map(value => value * 2);
    console.log('doubling array: ', doubled);
}

// forEach(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// !Note: NOT execute sequentially
const forEach = () => {
    const array = ['a', 'b', 'c'];
    const x = array.forEach((v, idx) => console.log(`index ${idx}: ${v}`))
}

// export function (common JS)
module.exports = { at, basic, basicString, forEach, find, filter, flatten, map, reduce, reference, slice, some, sort, splice }