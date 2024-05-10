const fornecedorController = require('../controllers/fornecedorController');
const express = require('express');
const router = express.Router();

router.get('/', fornecedorController.home);
router.get('/cadastro', fornecedorController.formCadastro);
router.get('/listarFornecedores', fornecedorController.listarFornecedores)
router.post('/cadastro', fornecedorController.cadastro);
router.get('/visualizara', fornecedorController.visualizarFornecedor);

module.exports = router;