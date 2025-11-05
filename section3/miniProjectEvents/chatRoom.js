

// We are building a mini chat App 

const EventEmitter = require('node:events')

class ChatRoom extends EventEmitter {
    constructor() {
        super()
        this.userSet = new Set(); //Set is a data struc that will contain only unique values, not any duplicate things 
        //users is the user which will do all the functionality or operate in the chat App 
    }

    //methods for operations in the chat App

    join(user){
        this.userSet.add(user) //add is the method to push user into the Set
        this.emit('join', user)
    }

    //message functionality
    sendMessage(user, message){
        if(this.userSet.has(user)){
            this.emit('message', user, message)
        }else{
            console.log(`This ${user} is not in the chat`);
        }
    }

    //leave functionality
    leave(user, leaveMessage){
        if(this.userSet.has(user)){
            this.userSet.delete(user)
            this.emit('leave', user, leaveMessage)
        }else{
            console.log(`Failed to leave for the ${user}`);
        }
    }
}

module.exports = ChatRoom

