var socket = io.connect();

const message = document.getElementById('message-box');
const handle = document.getElementById('handle-box');
const button = document.getElementById('send-button');
const chat = document.getElementById('chat-box');
const status = document.getElementById('chat-status');

//store temporary data
let socketData = {};

socket.on('connect', () => {
    console.log('connected!');
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    });
    message.value = '';
});

message.addEventListener('keypress', (e) => {
    socket.emit('typing', {
        handle: handle.value,
        typing: true,
    });
    clearInterval(socketData[socket.id]);
    socketData[socket.id] = setTimeout(function () {
        socket.emit('typing', {
            handle: handle.value,
            typing: false,
        });
    }, 3000);
});

socket.on('chat', (data) => {
    chat.innerHTML += `<div class="chat-message"><span class='chat-handle'>${data.handle}:<span><span class='chat-message'>${data.message}</span><br></div>`;
    status.innerHTML = ' ';
});

socket.on('typing', (data) => {
    if (data.typing === true) {
        status.innerHTML = `${data.handle} is typing...<br>`;
    } else {
        status.innerHTML = '';
    }
});
