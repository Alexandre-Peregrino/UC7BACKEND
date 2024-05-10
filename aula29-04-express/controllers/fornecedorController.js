const path = require('path'); 
const fornecedorModel = require('../models/fornecedorModel');
let listarFornecedor = []; 


class FornecedorController{
    home(req, res){
        res.sendFile(path.join(__dirname,'../public/html/fornecedor', 'homeFornecedor.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public/html/fornecedor', 'fornecedorForm.html'));
    }
    cadastro(req, res){
        const {nome, telefone, email} = req.body;
        let fornecedor = new fornecedorModel(nome, telefone, email);
        listarFornecedor.push(fornecedor);
        res.send({"Fornecedor cadastrado com sucesso!": fornecedor})
    }
    listarFornecedores(req, res){
        res.json(listarFornecedor);
    }
    visualizarFornecedor(req, res){
        res.sendFile(__dirname, '../public/html/fornecedor', 'fornecedor.html');
        // res.sendFile(path.join(__dirname,'../public/html/fornecedor', 'fornecedorForm.html'));
    }
}
module.exports = new FornecedorController();
