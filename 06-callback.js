const fs = require('node:fs/promises');

// callback: one event triggers a function call
// for example:
// - user clicks a refresh temperature icon, webpage fetches updated temperature (without reloading entire webpage)
// - webpage reads (setInterval) stock quote from external source, and updates the screen

console.log('Let get started...');

const hello = () => console.log('Hello, timeout()');
setTimeout(hello, 5000); // wait 1000ms timeout and then execute hello()

console.log('End of file'); // this line runs BEFORE hello()

// shorten form
setTimeout(() => { console.log('Hello shorten version') }, 2000);


// promise
const sleepOneSecond = new Promise((resolve) => setTimeout(resolve, 1000)); // sleep 1000 millisecond

// async function (returning a promise)
const listFolder = async () => {
    const files = await fs.readdir('.');
    // const files = await fs.readdir('./no-where');
    return files;
}

// the ".then"
listFolder().then(localFiles => console.log('dot-then >', localFiles.join(';'))).catch(error => console.error('We have a problem >>', error));


// IIFE (Immediately Invoked Function Expression) https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// "turn into an expression by wrap with ()(); first parenthesis turns to expression, second parenthesis is for executing"
(
    async () => {
        try {
            const localFiles = await listFolder();;
            console.log('async-await >', localFiles.join(', '));
        } catch (error) {
            console.error('it crashes >', error);
        }

    }
)();

// observation: setTimeOut() functions returns result later than "dot-then" & "async-await"