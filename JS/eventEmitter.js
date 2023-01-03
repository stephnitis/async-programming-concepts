'use strict';

const EventEmitter = require('events');

// create an event emitter instance 
const myEmitter = new EventEmitter();

// callback functions
function one() {
  console.log('Event One Occurred');
}

function two(){
  console.log('Event Two Occurred');
}

// register callback functions
myEmitter.on('eventOne', one); // Register for eventOne
myEmitter.on('eventTwo', two); // Register for eventTwo

// when the events are emitted, both callbacks are invoked
myEmitter.emit('eventOne'); // expected output: 'Event One Occurred'
myEmitter.emit('eventTwo'); // expected output: 'Event Two Occurred'