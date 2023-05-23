// import module
const logEvents = require('./logEvents');

// import core module 
const EventEmitter = require('events')

class MyErmitter extends EventEmitter {
  constructor() {
    super() // required
    
  }
}

// initalize object
const myErmitter = new MyErmitter();

// add Listener for the log event
myErmitter.on('log', (msg) => logEvents(msg)); 

myErmitter.emit('log', 'Log event emittet');
