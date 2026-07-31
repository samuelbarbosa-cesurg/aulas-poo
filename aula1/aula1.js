// Exercício 1:
//console.log("Bem-vindo à aula de JavaScript!");

// Exercício 2:
//const nome = "Samuel";
//console.log(`Olá, meu nome é ${nome}!`);

// Exercício 3:
const nome = "Samuel";
// const idade = 26;
//console.log(`${nome} tem ${idade} anos.`);

// Exercício 4:
// const num1 = 10;
// const num2 = 5;
//const soma = num1 + num2;

// console.log(`A soma é ${soma}`);

// Exercício 5
// const a = 10;
// const b = 2;

// const soma = a + b;
// const subtracao = a - b;
// const multiplicacao = a * b;
// const divisao = a/b;

// console.log(`Soma: ${soma}`);
// console.log(`Subtração: ${subtracao}`);
// console.log(`Multiplicação: ${multiplicacao}`);
// console.log(`Divisão: ${divisao}`);

// Exercício 6
// const nota1 = 8;
// const nota2 = 7;
// const nota3 = 9;
// const media = (nota1 + nota2 + nota3) / 3;

// console.log(`A média é ${media}`);

// Exercício 7
// const idade = 20;
// const mesesTotais = idade * 12;
// console.log(`A pessoa viveu aproximadamente ${mesesTotais} meses.`)

// Exercício 8
// const base = 10;
// const altura = 5;
// const area = base * altura;
// console.log(`A área do retângulo é ${area}`);

// Exercício 9
// const preco = 100;
// const desconto = 20;
// const valorFinal = preco - desconto;
// console.log(`O valor final é ${valorFinal}`);

// Exercício 10
// const salario = 2000;
// const aumento = 10;
// const novoSalario = salario + (salario*(aumento/100))

// console.log(`O novo salário é ${novoSalario}`);

// Exercício 11
// const idade = 26;
// if(idade >= 18){
    // console.log("Maior de idade");
// }else{
    // console.log("Menor de idade");
// }

// Exercício 12
// const media = 4;
// if(media >= 7){
    // console.log("Aprovado");
// }else{
    // console.log("Reprovado")
// }

// Exercício 13
// if(media >= 7){
    // console.log("Situação: Aprovado");
// }else if(media >= 5 && media < 7){
    // console.log("Situação: Recuperação")
// }else{
    // console.log("Situação: Reprovado")
// }

// Exercício 14
// const numero = 2;
// if(numero > 0){
    // console.log("Positivo");
// }else if(numero < 0){
    // console.log("Negativo")
// }else{
    // console.log("Zero")
// }

// Exercício 15
// if(numero%2 == 0){
//     console.log("Par");
// }else {
//     console.log("Ímpar");
// }

// Exercício 16
// const num1 = 10;
// const num2 = 25;
// if(num1 > num2){
    // console.log(`O maior número é ${num1}`)
// }else{
    // console.log(`O maior número é ${num2}`)
// }

// Exercício 17
// const a = 10;
// const b = 30;
// const c = 20;
// let maiorNumero;

// if(a > b && a > c){
//     maiorNumero = a;
// }else if(b > a && b > c){
//     maiorNumero = b;
// }else{
//     maiorNumero = c;
// }
// console.log(`O maior número é ${maiorNumero}`);

// Exercício 18
// const usuarioCorreto = "admin";
// const senhaCorreta = "1234";

// const usuarioDigitado = "admin";
// const senhaDigitada = "1234";
// if(usuarioDigitado == usuarioCorreto && senhaDigitada == senhaCorreta){
//     console.log("Login realizado com sucesso");
// }else{
//     console.log("Usuário ou senha inválidos");
// }

// Exercício 19
// const idade = 11;
// if(idade < 12){
//     console.log("Criança paga meia");
// }else if(idade >= 12 && idade <= 59){
//     console.log("Adulto paga inteira")
// }else{
//     console.log("Idoso paga meia")
// }

// Exercício 20
const peso = 35;
const altura = 1.75;

const imc = peso/ (altura*altura);
let classificacaoIMC = '';
if(imc < 18.5){
    classificacaoIMC = "Abaixo do peso";
}else if(imc >= 18.5 && imc <= 24.9){
    classificacaoIMC = "Peso normal"
}else if(imc >= 25 && imc <= 29.9){
    classificacaoIMC = "Sobrepeso"
}else{
    classificacaoIMC = "Obesidade"
}

console.log(`IMC: ${imc}\nClassificação: ${classificacaoIMC}`)