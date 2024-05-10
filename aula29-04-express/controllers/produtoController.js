const path = require('path'); 
const ProdutoModel = require('../models/produtoModel'); 
let listarProdutos = [];

let id = 0 

class ProdutoController{
    
    home(req, res){
        res.sendFile(path.join(__dirname,'../public/html/produto', 'homeProduto.html'));
    }

    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public/html/produto', 'produtoForm.html'));
    }

    cadastro(req, res){
        const {nome, id, preco} = req.body;
        id++;
        let produto = new ProdutoModel(nome, id, preco);
        listarProdutos.push(produto);
        res.send({"Dados guardados com sucesso!": produto})

    }
    listarProdutos(req, res){
        res.json(listarProdutos);
    }
    visualizarProdutos(req, res){

        res.sendFile(path.join(__dirname,'../public/html/produto', 'listarProdutos.html'));

    }
}
module.exports = new ProdutoController(); 