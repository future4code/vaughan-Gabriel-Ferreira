//              EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//  Questão 1:
/*
    A. 10
       50
       
    B. 50 

    Questão 2:

    A. A função pede para o usuário inserir um texto e avalia se o texto inserido contém a palavra cenoura.

    B. I. A saída para "Eu gosto de cenoura" seria true
      II. A saída para "CENOURA é bom pra vista" seria true, porque a função coloca o argumento em lower case.
     III. A saída para "Cenouras crescem na terra" seria false, porque cenouras é diferente de cenoura.

*/

//              EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  Questão 1:

//  A
let texto = "Meu nome é Gabriel, tenho 23 anos, moro no Rio de Janeiro e sou estudante da Labenu."
function bio (){
   console.log(texto)
}

bio()

//  B

function montarFrase(nome, idade, endereco, profissao){

    console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)

}

montarFrase('Gabriel', 23, 'Rio de Janeiro', 'estudante')

//  Questão 2:

function soma (primeiroNumero, segundoNumero){

    console.log(primeiroNumero + segundoNumero)

}

soma(4, 8)

function primeiroMaior (primeiroNumero, segundoNumero){
    console.log(primeiroNumero > segundoNumero)
}

primeiroMaior(3, 4)

function ehPar (numero){
    console.log(numero % 2 === 0)
}

ehPar(983)

const b = "Eu gosto de praia"

console.log(b.length)

function lengthUppercase (frase){

    console.log(frase.length)
    console.log(frase.toUpperCase())
}

lengthUppercase("Estou estudando")

//  Questão 3:

function somar(n1, n2){
    resultado = n1 + n2
    return resultado
}

function subtrair(n1, n2){
    resultado = n1 - n2
    return resultado
}

function multiplicar(n1, n2){
    resultado = n1 * n2
    return resultado
}

function dividir(n1, n2){
    resultado = n1/n2
    return resultado
}

let n1 = Number(prompt("Insira aqui um número que você curta"))
let n2 = Number(prompt("Insira aqui um outro número para que eles comecem um relacionamento"))

console.log(`Os números inseridos são: ${n1} e ${n2}.`)
console.log(`Soma: ${somar(n1, n2)}.`)
console.log(`Diferença: ${subtrair(n1, n2)}.`)
console.log(`Multiplicação: ${multiplicar(n1, n2)}.`)
console.log(`Divisão: ${dividir(n1, n2)}.`)

//          DESAFIO

// 1 - A 

let print = valor => console.log(valor)

// 1 - B

let printSoma = (num1, num2) => {
    let soma = num1 + num2

    print(soma)
}

printSoma(4, 9)

// Questão 2:

let num1 = 3
let num2 = 4

function pit(num1, num2){
    let answer = Math.hypot(num1, num2)

    return answer
}

pit(num1, num2)