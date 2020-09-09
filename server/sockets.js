const io = require('socket.io');
let socketData = {};

function initializeConnection(client, socketData) {
    console.log('Connection with user:', client.id);
    socketData[client.id] = Math.floor(Math.random() * 99999);
}

function cleanChat(data, clientid) {
    data.anon = socketData[clientid];
    if (data.message && data.message.trim() != '') {
        data.message = data.message.trim();

        if (data.handle.trim() === '') {
            data.handle = `anon${socketData[clientid]}`;
        }
        if (data.handle.length > 15) {
            data.handle = data.handle.slice(0, 15);
        }

        return data;
    }
}

//scoket events
function runSockets(server) {
    const socket = io(server);

    socket.on('connection', (client) => {
        initializeConnection(client, socketData);

        client.on('chat', (data) => {
            data = cleanChat(data, client.id);
            socket.emit('chat', data);
        });

        client.on('typing', (data) => {
            client.broadcast.emit('typing', data);
        });
    });
}

module.exports = {
    runSockets,
};
