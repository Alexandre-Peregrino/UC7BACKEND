const path = require('path'); //módulo path é importado para lidar com caminhos de arquivos e diretórios.

const ProdutoModel = require('../models/produtoModel'); // contém o modelo de dados para os produtos. Esse arquivo exporta uma classe ou função construtora que define a estrutura de um produto.

let id = 0 // será usado para atribuir um identificador único a cada produto cadastrado.


//Definida para lidar com as diferentes operações relacionadas aos produtos, como exibir a página inicial, lidar com o formulário de cadastro e processar o cadastro de novos produtos.
class ProdutoController{
    
    //Quando esta rota é acessada, ele simplesmente envia uma resposta "Essa é a rota dos produtos".
    home(req, res){
        res.sendFile(path.join(__dirname,'../public/html/produto', 'homeProduto.html'));
    }

    // Este método é responsável por lidar com a exibição do formulário de cadastro de produtos. Ele envia o arquivo HTML produtoForm.html localizado na pasta public.
    formCadastro(req, res){
        res.sendFile(path.join(__dirname,'../public', 'produtoForm.html'));
    }

    //Este método é chamado quando um novo produto é cadastrado. Ele extrai os dados do corpo da solicitação (nome e preço do produto), incrementa o ID, instancia um novo objeto ProdutoModel com esses dados e envia uma resposta com uma mensagem de confirmação e os dados do produto cadastrado.
    cadastro(req, res){
        const {nome, preco} = req.body;
        id++;
        let produto = new ProdutoModel(id,nome,preco);
        res.send({"Dados guardados com sucesso!": produto})


    }
}
module.exports = new ProdutoController(); //Exporta uma instância da classe ProdutoController, pronta para ser usada em outras partes do aplicativo.