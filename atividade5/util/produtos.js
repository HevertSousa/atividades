// Atividade 05 
// Desenvolvimento WEB
// Hevert Sousa
// UC19106625


let listadeProduto = [];

function adicionarProduto(id, nome, qtd) {
    listadeProduto.push({ id, nome, qtd });
}

function listarProdutos() {
    return listadeProduto;
}

function removerProduto(id) {
    listadeProduto = listadeProduto.filter(produto => produto.id !== id);
}

function editarQuantidadeProduto(id, qtd) {
    const index = listadeProduto.findIndex(produto => produto.id === id);
    if (index !== -1) {
        listadeProduto[index].qtd = qtd;
    }
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarQuantidadeProduto
};