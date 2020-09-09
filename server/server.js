const express = require('express');
const io = require('socket.io');
const path = require('path');
const hbs = require('hbs');

const app = express();

//paths and constants
const PORT = process.env.PORT || 5000;
const staticPath = path.join(__dirname, './../client/assets/');
const viewsPath = path.join(__dirname, './../client/views');
const partialsPath = path.join(__dirname, './../client/views/partials');

//app configurations
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//routes
app.get('*', (req, res) => {
    res.render('index', { myVariable: 'test' });
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

const socket = io(server);

socket.on('connection', (client) => {
    console.log('Connection with user:', client.id);

    client.on('chat', (data) => {
        socket.emit('chat', data);
    });

    client.on('typing', (data) => {
        client.broadcast.emit('typing', data);
        if (data.typing === true) {
            console.log(`${data.handle} is typing.`);
        }
        if (data.typing === false) {
            console.log(`${data.handle} stopped typing.`);
        }
    });
});
