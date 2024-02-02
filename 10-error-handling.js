// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

const test1 = () => {
    // throw new Error('throw an error');
    throw { msgX: 'something went wrong!!!' };
}
// test1();

// fetch using ".than"
const test2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(todos => console.log(`number of todos: ${todos?.length}`));
}
// test2();

const test3 = () => {
    fetch('https://wrong-url.nowhere').then(res => res.json()).then(todos => console.log(`number of todos: ${todos?.length}`)).catch(error => {
        console.log(`error type: ${typeof error};  error instanceof Error: ${error instanceof Error} \n`);
        console.error('Houston! we have a problem, ', error)
    });
}
test3();


// fetch API https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const test4 = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const response = await fetch('https://wrong-url.nowhere');
        const todo = await response.json();
        console.log('number of todos: ', todo?.length ?? 'unknown'); // ?. is optional chaining; ?? is nullish coalescing
    } catch (error) {
        console.log(`error type: ${typeof error};  error instanceof Error: ${error instanceof Error} \n`);
        console.error('Houston! we have a problem, ', error)
    }
}
// test4();

