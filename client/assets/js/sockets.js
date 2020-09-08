var socket = io.connect();

const message = document.getElementById('message-box');
const handle = document.getElementById('handle-box');
const button = document.getElementById('send-button');
const chat = document.getElementById('chat-box');
const status = document.getElementById('chat-status');

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
    });
});

socket.on('chat', (data) => {
    chat.innerHTML += `<div class="chat-message"><span class='chat-handle'>${data.handle}:<span><span class='chat-message'>${data.message}</span><br></div>`;
    status.innerHTML = ' ';
});

socket.on('typing', (data) => {
    status.innerHTML = `${data.handle} is typing...<br>`;
});
