'use strict';

const EventEmitter = require('events');

// create an event emitter instance 
const myEmitter = new EventEmitter();

// callback functions
function one() {
  console.log('Event One Occurred');
}

function two() {
  console.log('Event Two Occurred');
}

// register callback functions
myEmitter.on('eventOne', one); // Register for eventOne
myEmitter.on('eventTwo', two); // Register for eventTwo

// when the events are emitted, both callbacks are invoked
myEmitter.emit('eventOne'); // expected output: 'Event One Occurred'
myEmitter.emit('eventTwo'); // expected output: 'Event Two Occurred'

//defining our own Event Emitter class

class MyEventEmitter {
  // we need a constructor to initialize our store for events and callbacks
  constructor() {
    this.store = {};
  }

  // the class should have the ability to trigger an event which calls attached listeners
  emit(eventName, data) {
    if (!this.store[eventName]) {
      throw new Error(`Event ${eventName} Doesn\'t Exist`);
    }

    const fireCallbacks = (callback) => {
      callback(data);
    };

    this.store[eventName].forEach(fireCallbacks);
  }

  // the class should have the ability to attach listeners
  // the on method will take two arguments: the name of the event and listener, which is the callback to be fired
  on(eventName, listener) {
    // if the store doesn't have the event, it creates an empty array and pushes the listener in
    if (!this.store[eventName]) {
      this.store[eventName] = [];
    }

    this.store[eventName].push(listener);
  }

  // best practice says we should allow to remove listeners
  // remove individual listeners
  remove(eventName, listenerToRemove) {
    if (!this.store[eventName]) {
      throw new Error(`Cannot remove, event ${eventName} doesn\'t exist`);
    }

    const filterListeners = (listener) => listener !== listenerToRemove;

    this.store[eventName] = this.store[eventName].filter(filterListeners);
  }


}

// instantiate new instance of our Event Emitter class
const pseudoEmitter = new MyEventEmitter();

// write some callbacks
function pseudoOne() {
  console.log('Pseudo Event One Occurred');
}

function pseudoTwo() {
  console.log('Pseudo Event Two Occurred')
}

// register the events
pseudoEmitter.on('pseudoOne', pseudoOne);
pseudoEmitter.on('pseudoTwo', pseudoTwo);

// emit the events to invoke the callbacks
pseudoEmitter.emit('pseudoOne'); // expected output: 'Pseudo Event One Occurred'
pseudoEmitter.emit('pseudoTwo'); // expected output: 'Pseudo Event Two Occurred'