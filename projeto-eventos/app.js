const express = require('express');
const app = express();
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');

// Middleware para parsear JSON e dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar rotas definidas para a API de eventos
app.use('/api/events', eventRoutes);

// Rotas para páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'edit.html'));
});

app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'list.html'));
});

app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'delete.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
