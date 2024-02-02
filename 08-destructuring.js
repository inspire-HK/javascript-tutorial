
// array destructuring
const arrayDestructuring = () => {
    const names = ['Alex', 'Jacky', 'Grace'];

    const [alex, jacky] = names;
    console.log('first & second names:', alex, jacky)

    const [, , grace, nobody] = names;
    console.log('Grace & nobody:', grace, nobody);

    const [first, ...rest] = names; // "..." is spread operator
    console.log(`first name: ${first}, and the rest: ${rest}`, rest); // rest is string[]
}
arrayDestructuring();

// object destructuring
const objectDestructuring = () => {
    const jacky = { firstName: 'Jacky', lastName: 'Tsui', gender: 'M', age: 18 };
    const { firstName, gender, invalid } = jacky;
    console.log('objectDestructuring: ', firstName, gender, invalid);

    const { lastName, ...rest } = jacky;
    console.log(`lastName: ${lastName} and the rest: ${rest}`, rest);
}
objectDestructuring();


// clone array
const clone = () => {
    const array1 = [1, 2, 3];
    const array2 = [...array1];
    array1.push(99);
    console.log('array1:', array1)
    console.log('array2:', array2)

    const obj1 = { name: 'Alex', gender: 'M' };
    const obj2 = { ...obj1, mood: 'happy' };
    obj1.location = 'HK';
    console.log('obj1:', obj1);
    console.log('obj2:', obj2);
}
clone();