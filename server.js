const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)

const rooms = {}

io.on('connection', socket => {
    socket.on('join-room', roomID => {
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id)
        } else {
            rooms[roomID] = [socket.id]
        }
        const otherUser = rooms[roomID].find(id => id !== socket.id)
        if (otherUser) {
            socket.emit('other-user', otherUser)
            socket.to(otherUser).emit('user-joined', socket.id)
        }
    })

    socket.on('offer', payload => {
        io.to(payload.target).emit('offer', payload)
        console.log(`offer id:(${scoket.id}) target:(${paload.target}) payload:(${payload})`)
    })

    socket.on('answer', payload => {
        io.to(payload.target).emit('answer', payload)
        console.log(`answer: id:(${scoket.id}) target:(${paload.target}) payload:(${payload})`)
    })

    socket.on('ice-candidate', incoming => {
        io.to(incoming.target).emit('ice-candidate', incoming.candidate)
        console.log(`ice-candidade id:(${scoket.id}) target:(${incoming.target}) candidate:(${incoming.candidate})`)
    })
})


server.listen(3333, () => console.log('Server running on http://localhost:3333'))