// Atividade 05
// Desenvolvimento WEB
// Hevert Sousa
// UC19106625

const express = require('express');
const produto = require('./util/produtos');

const listaProdutos = []

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/adicionar/:id/:nome/:qtd', (req, res) =>{
    const {id,nome,qtd} = req.params;
    produto.adicionarProduto(id,nome,parseInt(qtd))
    res.send('Produto adicionado com sucesso')
})

app.get('/listar', (req,res)=> {
    const prod = produto.listarProdutos();
    res.json(prod)       
});

app.get('/remover/:id', (req, res)=>{
    const { id } = req.params;
    produto.removerProduto(id)
    res.send('Produto removido com sucesso');
})

app.get('/editar/:id/:qtd',(req,res)=>{
    const {id, qtd} = req.params;
    produto.editarQuantidadeProduto(id, parseInt(qtd));
    res.send('Quantidade do produto atualizada com sucesso')
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });