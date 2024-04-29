const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static('public'));

// Middleware para tratar dados do formulário
app.use(express.urlencoded({ extended: false }));

// Rota GET para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'html', 'cadastro.html'));
});

// Rota POST para lidar com o envio do formulário
app.post('/submit', (req, res) => {
  const { nome, telefone, tipo_servico, descricao_servico } = req.body;
  // Aqui você pode fazer o que quiser com os dados do formulário, como salvá-los em um banco de dados
  res.send(`Obrigado por enviar o formulário, ${nome}!`);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
