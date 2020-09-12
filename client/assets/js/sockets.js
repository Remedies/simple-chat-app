require('./../css/styles.scss');
var socket = io.connect();

const message = document.getElementById('message-box');
const handle = document.getElementById('handle-box');
const button = document.getElementById('send-button');
const chat = document.getElementById('chat-box');

//store temporary data.
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
    clearInterval(socketData[socket.id]);
    socket.emit('typing', {
        handle: handle.value,
        typing: false,
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
    console.log('anon' + data.anon);
    if (data.handle === handle.value || data.handle == 'anon' + data.anon) {
        chat.innerHTML += `<div class="chat-bubble chat-bubble-self"><span class='chat-handle'>${data.handle}:</span><span class='chat-message'>${data.message}</span></div>`;
    } else {
        chat.innerHTML += `<div class="chat-bubble"><span class='chat-handle'>${data.handle}:</span><span class='chat-message'>${data.message}</span></div>`;
    }
    let objDiv = document.getElementById('chat-box');
    objDiv.scrollTop = objDiv.scrollHeight;
});

socket.on('typing', (data) => {
    const status = document.getElementById('chat-status');
    if (data.typing == true) {
        status.innerHTML = `${data.handle} is typing...<br>`;
    } else {
        status.innerHTML = ' ';
    }
});
