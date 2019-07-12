const EventEmitter=require('events');

class MyEmitter extends EventEmitter{

}

//init object
const myEmiter =new MyEmitter();

//event listener
myEmiter.on('event',()=>console.log('event fired'));

//init event
myEmiter.emit('event');