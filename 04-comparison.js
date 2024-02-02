

const basic = () => {
    const x = 10;
    const y = 20;

    console.log('x:', x, '; y:', y)
    if (x > y) {
        console.log('x is greater than y');
    } else if (x == y) {
        console.log('x equals to y');
    } else {
        console.log('x is NOT greater than y');
    }

    // ternary comparison (another type shorthand)
    const result = x > y ? 'x is greater than y' : x === y ? 'x equals to y' : 'x is NOT greater than y'
    console.log('result is: ', result)


    // primitive types vs reference (pointer)
    const str1 = 'Hello';
    const str2 = "Hello";
    console.log('(string) str1 == st2 ? ', str1 == str2, str1 === str2); // true, both strings have the same value

    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    console.log('(array), arr1 == arr2 ?', arr1 == arr2); // false, array is a reference (arr1 & arr2 point to DIFFERENT memory address locations)

    const alex1 = { name: 'Alex' };
    const alex2 = { name: 'Alex' };
    console.log('(object) alex1 == alex2 ?', alex1 == alex2, alex1 === alex2); // false & false,
    alex2.gender = 'M'; //
}
basic();


const funny = () => {
    console.log('true && "Hello" >> ', true && "true && Hello");
    console.log('true || "Hello" >> ', true || "true || Hello");

    console.log('false && "Hello" >> ', false && "false && Hello");
    console.log('false || "Hello" >> ', false || "false || Hello");

    const checkItOut = true && "true && Hello";
}
funny();


// truthy falsy
const truthy = () => {
    const array = [];
    const object = {};
    console.log('truthy >>', true, !!1, !!array, !!object, !!-1);

    console.log('falsy >>', false, !!0, !!null, !!undefined, !!Number('abc'));
}
truthy();