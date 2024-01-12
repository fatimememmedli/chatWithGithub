const express = require("express");
const { createServer } = require("node:http");

const { Server } = require("socket.io");
const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

let arr = [];

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("message", (message) => {
        console.log(message, socket.id);
        arr.push(message);
        io.emit("message", arr);
    });
});

server.listen(3003, () => {
    console.log(`Example app listening on port`);
});
//////////////////////////////////////
