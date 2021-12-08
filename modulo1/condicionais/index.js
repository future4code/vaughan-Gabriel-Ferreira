// EXERCÍCIOS DE INTERPETAÇÃO DE CÓDIGO

// Questão 1:
// A. O teste que ele realiza é para saber se o número é divisível por 2 ou não.
// B. Ele imprime "Passou no teste." para todos os números pares.
// C. Ele imprime "Não passou no teste." para todos os números ímpares.

// Questão 2:
// A. O código serve para retornar a fruta digitada pelo usuário e seu respectivo preço.
// B. A mensagem impressa será "O preço da fruta Maçã é R$ 2.25"
// C. A mensagem impressa no console se o break fosse retirado seria:
// "O preço da fruta Pêra é 5 R$"

// Questão 3:
// A. A primeira linha declara a constante "numero" como um prompt para o usuario e a converte em número.
// B. Caso o usuário tenha digitado 10, a mensagem do terminal será: "Esse número passou no teste", e logo em seguida dará erro.
// Caso o usuário tenha digitado -10, não haverá mensagem no terminal e dará erro.
// C. Haverá um erro no console, porque a variável "mensagem" só existirá dentro do escopo da condicional.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Questão 1:

idadeUsuario = Number(prompt("Qual é a sua idade?"))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// Questão 2:

const turnoAluno = prompt("Digite em qual turno do dia você estuda, sendo M para matutino, V para vespertino e N para noturno")

if(turnoAluno === 'M') {
    console.log("Bom Dia!")
} else if(turnoAluno === 'V'){
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}

// Questão 3:

switch (turnoAluno){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

// Questão 4 + DESAFIO(1):

const generoFilme = prompt("Qual seria o gênero de filme que você quer assistir?")
const precoIngresso = Number(prompt("Qual é o preço do ingresso?"))

if(generoFilme === "Fantasia" && precoIngresso <= 15){
    let lanche = prompt('Vais comer alguma guloseima? Qual?')
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanche}`)
} else{
    console.log("Escolha outro filme :(")
}

// DESAFIO(2):
// Sinceramente, a preguiça venceu












