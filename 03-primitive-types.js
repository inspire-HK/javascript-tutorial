
/**
 * basic primitive types: String, Number (integer & float), BigInt, Undefined, Null, Symbol, Object
 */

function basic() {


    let s = 'Hello World';
    let b = true;
    let n = 12.3;
    let arr = [1, 2];

    console.log('substring', s.substring(2, 3))

    // == vs ===  (double equal vs triple equal); side note: single equal sign is "assignment"
    console.log("'1' == 1: ", '1' == 1, typeof '1', typeof 1); // comparison
    console.log("'1' === 1: ", '1' === 1);

    //assignment
    let x = 2;
    const y = 2;
    // x += y; // x = x + y
    console.log('updated x: ', x);
}
basic();

// javascript object (python dictionary)
const basicObject = () => {
    const alex = {
        name: 'Alex',
        gender: 'man',
        loc: 'Hong Kong',
    };

    console.log(typeof (alex), alex)

    // object shorthand
    const email = 'alex.wt.tsui@gmail.com';
    const alex2 = { email }; // equivalent to const alex = { email: email}
    console.log('alex', typeof alex2, alex2);
}
basicObject();

// null vs undefined
// undefined: "typically" means that variable is a not defined previously
// null: means than value of variable is known, and have no value. For example, my_religion: null (it's not unknown, I just don't have one)

// Object <-> Array
const objectMethod = () => {
    const car = { maker: 'Toyota', model: 'Yaris', year: 2000 }

    const array = Object.entries(car);
    const backToObject = Object.fromEntries(array)
    console.log('convert object to array of key-value pair:', array, typeof array); // "sometimes", it is easier to iterate using array.map()
    console.log('convert back to object: ', backToObject, typeof backToObject); //

    console.log('JSON.stringify:', JSON.stringify(car));
    console.log('JSON.parse:', JSON.parse(JSON.stringify(car)));
}
objectMethod();



// type conversion (aka cast); https://www.w3schools.com/js/js_type_conversion.asp
const cast = () => {
    console.log('cast to number:', Number('11'), Number(12), Number(Math.PI), Number(false), Number(' '), Number('abcd')); // Number('abcd') returns NaN (Not A Number)
    console.log('cast to number (old approach:', parseInt('33'), parseFloat('33.45'));

    const now = new Date();
    console.log('cast Date to Number', Number(now), now.getTime()); // return system time (in ms) since 1970-01-01 00:00:00 UTC
    console.log('round decimal >> ', (123.4567).toFixed(2));

    console.log('cast to string: ', String(new Date()), String(true), String(99), String('88'), (123).toString(), (123456789).toString(36));
    console.log('toString() >>', true.toString(), now.toISOString(), now.toDateString());
}
// cast();