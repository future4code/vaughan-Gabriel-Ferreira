/* 
    EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

Questão 1:
    10
    10, 5

Questão 2:
    10, 10, 10

Questão 3: 
    Sugiro p = horasDeTrabalhoPorDia
    Sugiro t = DinheiroRecebidoPorDia
*/

const nome = prompt('Qual é o seu nome?');
let idade = prompt('Quantos anos você tem?');
console.log(typeof nome);
console.log(typeof idade);

/* 
    EXERCÍCIOS DE ESCRITA
    Questão 1: 
    d) Apareceu o seguinte tipo: undefined. Isso aconteceu porque as variáveis não foram definidas. 
    f) Apareceu o seguinte tipo: string.
*/
console.log('Olá, ',nome,' você tem ',idade,' anos.'); 

// QUESTÃO 2:

const resposta1 = prompt('Sua postura está boa?');
const resposta2 = prompt('Vai descontrair de alguma forma depois da aula de hoje?');
const resposta3 = prompt('Você está descalço(a)?');

console.log('Sua postura está boa?', resposta1);
console.log('Vai descontrair de alguma forma depois da aula de hoje?', resposta2);
console.log('Você está descalço(a)?', resposta3);

// QUESTÃO 3:

var a = 10;
var b = 25;

// Aqui faremos uma lógica para trocar os valores.

var c = a;
var a = b;
var b = c;

console.log(a, b);

// DESAFIO

let d = Number(prompt('Digite dois números para aprender sobre os milagres da soma e da multiplicação.'));
let e = Number(prompt(''));

let f = d + e;
let g = d * e;

console.log('OLHA A SOMAAAA', f);
console.log('OLHA COMO EU MULTIPLICO COM DESTREZA', g)