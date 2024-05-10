const clienteController = require('../controllers/clienteController');
const express = require('express');
const router = express.Router();

router.get('/', clienteController.home);
router.get('/cadastro', clienteController.formCadastro);
router.get('/listarClientes', clienteController.listarCliente)
router.post('/cadastro', clienteController.cadastro);
router.get('/visualizar', clienteController.visualizarClientes)

module.exports = router;