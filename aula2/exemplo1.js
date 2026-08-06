function calcularEstoque(quantidade, valor){
    return quantidade * valor
}

const produto = {
    nome: "Teclado",
    quantidade: 15,
    valor: 10
}

console.log(`Valor total do estoque: R$ ${calcularEstoque(produto.quantidade, produto.valor)}`)

