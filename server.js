const express = require('express');
const app = express();
const io = require('socket.io');

const PORT = process.env.PORT || 5000;

//routes
app.get('*', (req, res) => {
    res.status(200).send('Hello!');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
