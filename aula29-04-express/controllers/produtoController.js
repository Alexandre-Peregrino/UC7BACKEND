const path = require('path');
const ProdutoModel = require('../models/produtoModel');

class ProdutoController{
    home(req, res){
        res.send('Essa é a rota dos produtos');
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public', 'index.html'));
    }
}
module.exports = new ProdutoController();