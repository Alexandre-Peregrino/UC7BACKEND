const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/contato', (req, res)=>{
    res.send('<h1> contato com alguém </h1>');
})

// app.listen(port, ()=>{
//     console.log(`http://localhost:${port}`);

// })