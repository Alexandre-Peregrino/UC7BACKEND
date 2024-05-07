const clienteController = require('../controllers/clienteController');
const express = require('express');
const router = express.Router();

router.get('/', clienteController.home);
router.get('/cadastro', clienteController.formCadastro);
router.get('/listarCliente', clienteController.listarCliente)
router.post('/cadastro', clienteController.cadastro);

module.exports = router;