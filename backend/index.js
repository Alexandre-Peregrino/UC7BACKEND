const express = require('express');
const cors = require('cors');
const server = express();
const filmes = require('./public/data/filmes.json');
const path = require('path')



server.use(express.static('public'));

server.get('/filmes', (req, res) => {
    return res.json({ filmes });
});

server.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log(`http://localhost:${3000}`);
});


