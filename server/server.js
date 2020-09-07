const express = require('express');
const io = require('socket.io')();
const path = require('path');
const hbs = require('hbs');

const app = express();

//constants
const PORT = process.env.PORT || 5000;
const staticPath = path.join(__dirname, './../client/assets/');
const viewsPath = path.join(__dirname, './../client/views');

//app configurations
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//routes
app.get('*', (req, res) => {
    res.render('index', { myVariable: 'test' });
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('test', socket.id);
});
