const path = require('path'); 

const ClienteModel = require('../models/clienteModel'); 

let id = 0;
let listCliente = [];

class ClienteController{ 
    home(req, res){
        res.sendFile(path.join(__dirname,'../public/html/cliente', 'homeCliente.html'));
    }

  
    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public/html/cliente', 'clienteForm.html'));
    }

    cadastro(req, res){
        const {nome, telefone, email} = req.body;
        id++;
        let cliente = new ClienteModel(nome, telefone, email);
        listCliente.push(cliente);
        res.send({"Cliente cadastrado com sucesso!": cliente})


    }
    listarCliente(req, res){
        res.json(listCliente);
    }
}
module.exports = new ClienteController();