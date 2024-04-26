const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/home', (req,res)=>{
    res.send('Hoje é quinta-feira 25-04-24');
});

app.get('/cadastro', (req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'cadastro.html'))
})

app.post('/cadastro', (req, res)=>{
    const {nome, contato, idade} =req.body;
    console.log(`Nome = ${nome} Contato = ${contato} Idade = ${idade}`);

    res.send(`Nome = ${nome} Contato = ${contato} Idade = ${idade}`);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})