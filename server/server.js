const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sockets = require('./sockets.js');
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

//run server
const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

//run sockets
sockets.runSockets(server);
