

// switch
const switchTest = () => {
    const ageGroup = 'teenage';
    switch (ageGroup) {
        case 'teenage':
            console.log('user is a teenage');
            break;
        case 'adult':
            console.log('user is an adult');
            break;
        default:
            console.log('unknown');
    }
}
// switchTest();

// while
const whileTest = () => {
    let number = 0
    let iSingleDigit = false
    while (!iSingleDigit) {
        if (number > 9) {
            break; // continue
            // iSingleDigit = true;
        }
        number++
    }

    console.log('biggest number which is less than 10: ', number)
}
whileTest();

// array for...of; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
const forOfTest = async () => {
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
        console.log(element);
    }
}
forOfTest()

// object for...in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
const forInTest = () => {
    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}