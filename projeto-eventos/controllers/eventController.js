const Event = require('../models/event');

class EventController {
    static criarEvento(req, res) {
        const { titulo, descricao, data, local } = req.body;
        const evento = Event.criarEvento(titulo, descricao, data, local);
        res.status(201).json(evento);
    }

    static listarEventos(req, res) {
        const eventos = Event.listarEventos();
        res.json(eventos);
    }

    static obterEventoPorId(req, res) {
        const evento = Event.obterEventoPorId(req.params.id);
        if (evento) {
            res.json(evento);
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    }

    static atualizarEvento(req, res) {
        const { titulo, descricao, data, local } = req.body;
        const evento = Event.atualizarEvento(req.params.id, titulo, descricao, data, local);
        if (evento) {
            res.json(evento);
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    }

    static excluirEvento(req, res) {
        const sucesso = Event.excluirEvento(req.params.id);
        if (sucesso) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    }
}

module.exports = EventController;
