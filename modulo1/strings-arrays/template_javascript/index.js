//              EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO

/* 
    Questão 1:
        a. undefined
        b. null
        c. 11
        d. 3
        e. 3, 19, 4, 5, etc
        f. 9
*/
/*
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[ i + 1 ] = 19
console.log("e. ", array)

const valor = array[i+6]
console.log('f. ', valor)
*/
/*
    Questão 2: 
        SUBI NUM ÔNIBUS EM MIRROCOS 27    
*/

//              EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  Questão 1:  

let nomeUsuario = prompt("Por favor, insira seu nome")
let emailUsuario = prompt("Por favor, insira seu email")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}!`)

// Questão 2:


let array = ['batata', ' arroz', ' feijão', ' frango', ' chocolate']

console.log(`a. ${array}`)
console.log('b. Essas são as minhas comidas preferidas:')
console.log(array[0])
console.log(array[1].trim())
console.log(array[2].trim())
console.log(array[3].trim())
console.log(array[4].trim())

let comidaFav = prompt("Qual a sua comida favorita?")
console.log(`c. Lista de comidas favoritas atualizada:`)
console.log(array[0].trim())
console.log(array[1].replaceAll('arroz', comidaFav).trim())
console.log(array[2].trim())
console.log(array[3].trim())
console.log(array[4].trim())

// Questão 3:

let listaDeTarefas = []
let tarefa1 = prompt('Digite uma atividade que você precisa realizar hoje')
let tarefa2 = prompt('Digite uma outra')
let tarefa3 = prompt('Digite uma última')

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

tarefaRealizada = prompt('Digite aqui o índice de uma tarefa que você já realizou. Para a primeira 0, para a segunda 1 e para a terceira 2')
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

// DESAFIO

frase = prompt("Digite aqui uma frase")
fraseSplitada = frase.split(" ")

console.log(`a. ${fraseSplitada}`)

arrayDes = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let index = arrayDes.indexOf("Abacaxi")
console.log(index, arrayDes.length)