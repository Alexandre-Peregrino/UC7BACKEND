let cont = 0;
class Event {
    constructor(id, titulo, descricao, data, local) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.local = local;
        this.criadoEm = new Date();
        this.atualizadoEm = new Date();
    }

    static criarEvento(titulo, descricao, data, local) {
        cont++
        const evento = new Event(cont, titulo, descricao, data, local);
        Event.events.push(evento);
        return evento;
    }

    static listarEventos() {
        return Event.events;
    }

    static obterEventoPorId(id) {
        return Event.events.find(evento => evento.id === parseInt(id));
    }

    static atualizarEvento(id, titulo, descricao, data, local) {
        const evento = Event.obterEventoPorId(id);
        if (evento) {
            evento.titulo = titulo;
            evento.descricao = descricao;
            evento.data = data;
            evento.local = local;
            evento.atualizadoEm = new Date();
        }
        return evento;
    }

    static excluirEvento(id) {
        const index = Event.events.findIndex(evento => evento.id === parseInt(id));
        if (index !== -1) {
            Event.events.splice(index, 1);
            return true;
        }
        return false;
    }
}

Event.events = [];

module.exports = Event;
