const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //acessar arquivos e navegar no diretório

app.use(express.static('public')); //definir uma pasta estática para acesso livre da aplicação (html, css, img, js...)
app.use(express.json()); //comando para tratar dados json
app.use(express.urlencoded({extended: false})); //Tratar requisições html (formulários)

app.get('/', (req,res)=>{
    res.send('bem-vindo!');
});

app.get('/cadastro', (req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'cadastro.html'))
})

app.post('/cadastro', (req, res)=>{
    const {nome, contato, idade} =req.body;
    console.log(`Nome = ${nome} Contato = ${contato} Idade = ${idade}`);

    res.send(`Nome = ${nome} Contato = ${contato} Idade = ${idade}`);
});


app.listen(port,()=>{
    console.log(`Aplicação ativa em http://localhost:${port}`);
});

