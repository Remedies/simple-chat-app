var socket = io();

socket.on('connect', () => {
    console.log('connected!');
});

socket.on('response', () => {
    console.log('response from server!');
});
