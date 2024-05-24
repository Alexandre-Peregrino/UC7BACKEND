const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/cadastro', eventController.criarEvento);
router.get('/', eventController.listarEventos);
router.get('/:id', eventController.obterEventoPorId);
router.put('/:id', eventController.atualizarEvento);
router.delete('/:id', eventController.excluirEvento);

module.exports = router;

