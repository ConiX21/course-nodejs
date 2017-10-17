var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var newPlayer = function () {
  console.log('Hello you are new !');
}

//Assign the event handler to an event:
eventEmitter.on('newPlayer', newPlayer);

//Fire the 'scream' event:
eventEmitter.emit('newPlayer');