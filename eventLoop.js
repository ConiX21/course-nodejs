//Event loop
const fs = require('fs');

fs.watch("test-eventLoop.txt", (event, filename) =>{
    console.log(`Event : ${event}, for file ${filename}`);
})


console.log('before immediate');

//setImmediate() will execute code at the end of the current event loop cycle.
// This code will execute after any I/O operations in the current event loop and before any timers scheduled for the next event loop.

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');

setTimeout(() => {
    console.log("Run after 2500 ms");
}, 2500);

console.log('Now Watching test-eventLoop.txt for changes');