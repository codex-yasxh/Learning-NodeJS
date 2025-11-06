


const express = require('express')

const app = express()



app.get('/', (req, res)=>{
    res.send('sending response to the client from the server side')
})

app.listen(3000,()=>{
    console.log("server started w express");
})