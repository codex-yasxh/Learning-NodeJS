


const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (message)=>{
    console.log(`Hey Welcome! ${message}`);
})

eventEmitter.emit('greet','Yash')