const express = require('express');
const io = require('socket.io')();
const path = require('path');
const hbs = require('hbs');

const app = express();

//constants
const PORT = process.env.PORT || 5000;
const staticPath = path.join(__dirname, './client/assets/');

//app configurations
app.use(express.static(staticPath));

//routes
app.get('*', (req, res) => {
    res.status(200).send('Hello!');
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('test', socket.id);
});
