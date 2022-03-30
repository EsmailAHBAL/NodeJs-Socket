const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const app = express();

const socketIO = require('socket.io')

const server = require('http').createServer(app);

const io =socketIO(server);
io.on('connection',(socket)=>{


    socket.on('sendMsg',()=>{
        io.to('MyRoom').emit('msgReceived')
    })
    socket.on('joinToRoom',()=>{
     socket.join("MyRoom");
    })
})
app.get("/",(req,res,next)=>{

   res.sendFile("/home/leader/Desktop/NodeJsLearning/TP-socket/index.html")

})
server.listen(3003,()=>{console.log("The sever Listen On PORT 3003")})
