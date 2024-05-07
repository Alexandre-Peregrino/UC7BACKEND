const path = require('path'); 
const fornecedorModel = require('../models/fornecedorModel');
let id = 0
let listarFornecedor = [];


class FornecedorController{
    home(req, res){
        res.sendFile(path.join(__dirname,'../public/html/fornecedor', 'homeFornecedor.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public', 'fornecedorForm.html'));
    }
    cadastro(req, res){
        const {nome, telefone, email} = req.body;
        id++;
        let cliente = new fornecedorModel(nome, telefone, email);
        listarFornecedor.push(fornecedor);
        res.send({"Fornecedor cadastrado com sucesso!": cliente})
    }
    listarFornecedor(req, res){
        res.json(listarFornecedor);
    }

}
module.exports = new FornecedorController();
