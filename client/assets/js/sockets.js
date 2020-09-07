var socket = io.connect();

const message = document.getElementById('message-box');
const handle = document.getElementById('handle-box');
const button = document.getElementById('send-button');
const chat = document.getElementById('chat-box');

socket.on('connect', () => {
    console.log('connected!');
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    });
});

message.addEventListener('keypress', (e) => {
    socket.emit('typing', {
        handle: handle.value,
    });
});

socket.on('chat', (data) => {
    chat.innerHTML += `<p><strong>${data.handle}:<strong> ${data.message}</p>`;
});

socket.on('typing', (data) => {
    chat.innerHTML = `<p>${data.handle} is typing...</p>`;
});
