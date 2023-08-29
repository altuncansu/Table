const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const db = require("./db.json")
const {faker} = require('@faker-js/faker')

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});
let dataLength = 1000
function generateData(length) {
  const data = { users: [] , chart : [faker.number.int(),faker.number.int(),faker.number.int()] }
  for (let i = 0; i < length; i++) {
      const user = {
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          phone: faker.phone.number(),
          email: faker.internet.email(),
  
      }
      data.users.push(user)
    }
  return data
}


io.on('connection', (socket) => {
  console.log('a user connected');
  setInterval(() => {

    const data = generateData(dataLength)

    socket.emit('data', data)
  
  }, 20)
  socket.emit("data", db)
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});