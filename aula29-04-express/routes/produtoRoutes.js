const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();

router.get('/', produtoController.home);
router.get('/cadastro', produtoController.formCadastro);
router.get('/listarProdutos', produtoController.listarProdutos)
router.post('/cadastro', produtoController.cadastro);
router.get('/visualizar', produtoController.visualizarProdutos);

module.exports = router;