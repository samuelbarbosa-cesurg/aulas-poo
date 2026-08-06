// Exercicio 1
function saudar(nome){
    return `Olá, ${nome}!`
}

// console.log(saudar("Ana"))


// Exercicio 2
function somar(valor1, valor2){
    return valor1 + valor2
}

// console.log(somar(10, 5))

// Exercicio 3
function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}

// console.log(`Média: ${calcularMedia(8, 7, 9)}`)

// Exercicio 4
function verificarMaiorIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

// console.log(verificarMaiorIdade(25))

// Exercicio 5
const aluno = {
    nome: 'Ana',
    idade: 20,
    curso: 'ADS',
    media: 1
}

// console.log(`${aluno.nome} tem ${aluno.idade} anos, estuda ${aluno.curso} e possui a média ${aluno.media}`)

// Exercicio 6
function mostrarAluno(aluno){
    return `${aluno.nome} tem ${aluno.idade} e estuda ${aluno.curso}`
}

// console.log(mostrarAluno(aluno))

// Exercicio 7
function verificarSituacao(aluno){
    if(aluno.media >= 7){
        return "Aprovado"
    }else if(aluno.media < 7 && aluno.media >= 5){
        return "Recuperação"
    }else {
        return "Reprovado"
    }
}

// console.log(verificarSituacao(aluno))


// Exercicio 8
const produto = {
    nome: 'Banana',
    preco: 5,
    quantidade: 2,
}

function calcularTotal(produto){
    return produto.quantidade * produto.preco
}

// console.log(`Valor total do produto em estoque: R$ ${calcularTotal(produto)}`)

// Exercicio 9
const produto2 = {
    nome: "Mouse",
    preco: 100,
    desconto: 20
}

function aplicarDesconto(produto){
    return produto.preco - produto.desconto
}

// console.log(aplicarDesconto(produto2))

// Exercicio 10
const pessoa = {
    nome: 'Samuel',
    idade: 26,
    cidade: 'Marau'
}

function apresentarPessoa(pessoa){
    return `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}.`
}

// console.log(apresentarPessoa(pessoa))


// Desafio final
const livro = {
    titulo: 'Crime e Castigo',
    autor: 'Fiódor Dostoiévski',
    ano: 1866,
    disponivel: true
}

function mostrarLivro(livro){
    return `${livro.titulo}, escrito por ${livro.autor}, publicado em ${livro.ano}.`
}

function verificarDisponibilidade(livro){
    if(livro.disponivel){
        return "Livro disponível para empréstimo"
    }else{
        return "Livro indisponível"
    }
}

function emprestarLivro(livro){
    if(livro.disponivel){
        livro.disponivel = false
        return "Empréstimo realizado com sucesso"
    }else{
        return "Este livro já está emprestado"
    }
}

console.log(mostrarLivro(livro));
console.log(verificarDisponibilidade(livro));
console.log(emprestarLivro(livro));
console.log(verificarDisponibilidade(livro));

