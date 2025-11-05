const chatRoom = require('./chatRoom')

const chat = new chatRoom();

chat.on('join', (user)=>{
    console.log(`A wild ${user} appeared in the chat!`);
})

chat.on('message', (user, message)=>{
    console.log(`${user} : ${message}`);
})

chat.on('leave', (user)=>{
    console.log(`${user} has left the chat!`);
})


//stimulating the chat app

const actions = [
  () => chat.join('Aditya'), 
  () => chat.join('krsna'),
  () => chat.sendMessage('Aditya', "Aur bhai krsna kaisa hai"),
  () => chat.sendMessage('krsna', "aur kya dost mast hu I'm placed"),
  () => chat.sendMessage('Aditya', "Congrats Bhai"),
  () => chat.join("Shivam"),
  () => chat.join('Anjishnu'),
  () => chat.sendMessage('Anjishnu', "I don't want to be in the group!"),
  () => chat.sendMessage('Shivam', 'Okay Kid!! Leave!'),
  () => chat.leave('Anjishnu', "Bye guys"),
  () => chat.leave('Shivam', 'see yaa guys'),
  () => chat.join('Shriya')
];


const baseDelay = 2000;

actions.forEach((func, index)=>{
    setTimeout(func, index * baseDelay);
})