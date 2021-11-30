/*          EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

    Questão 1:
        a. false
        b. false
        c. true
        d. boolean
    
    Questão 2:
        Percebo que o colega não fez a conversão da mensagem a ser digitada
        no prompt em number. Isso é um problema porque toda mensagem digitada 
        no prompt é devolvida no tipo String. Será impressa no console uma concatenação
        dos números digitados.
    
    Questão 3:
        A solução que eu sugiro é converter a String digitada no prompt para o tipo number.
        Isso seria feito assim: 

            let primeiroNumero = Number(prompt("Digite um numero!"))
            let segundoNumero = Number(prompt("Digite outro numero!"))

            const soma = primeiroNumero + segundoNumero

            console.log(soma)
*/

//          EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  Questão 1:

const idade = prompt("Qual é a sua idade?");
const idadeAmigo = prompt("Qual é a idade do(a) seu(ua) melhor amigo(a)?");
const idadeMaior = idade > idadeAmigo;
const diferencaIdade = idade - idadeAmigo;
console.log("A sua idade é maior que a do(a) seu(ua) melhor amigo(a)?", idadeMaior);
console.log("A diferença de idade entre vocês é de", diferencaIdade, "anos.");

// Questão 2:

const numeroPar = Number(prompt("Por favor, insira um número par."));
console.log(numeroPar % 2);

// Se o número for par, o resto será 0. Se o número for ímpar, o resto será 1.

// Questão 3:

const idadeAnos = Number(prompt("Digite aqui sua idade e vamos descobrir melhor o quão velho(a) você é"));
const idadeMeses = idadeAnos * 12;
const idadeDias = idadeMeses * 30;
const idadeHoras = idadeDias * 24;
console.log("Olha aqui a sua idade em meses:", idadeMeses);
console.log("Olha aqui a sua idade em dias:", idadeDias);
console.log("Olha aqui sua idade em horas:", idadeHoras);

// Questão 4:

const primeiroNumero = Number(prompt("Digite aqui um número qualquer"));
const segundoNumero = Number(prompt("Digite aqui um outro número qualquer"));

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);
console.log("O segundo número é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);

//          DESAFIO

// Questão 1:

const a = (77 - 32)*(5/9) + 273.15;
console.log(a, "K");

const b = 80*(9/5) + 32;
console.log(b, "ºF");

const c1 = 30 * (9/5) + 32;
const c2 = 30 + 273.15;
console.log("30ºC serão", c1, "ºF", "e", c2, "K");

const d1 = Number(prompt("Coloque aqui o valor em ºC que você deseja converter em ºF"));
console.log(d1 * (9/5) + 32, "ºF");

const d2 = Number(prompt("Coloque aqui o valor em ºC que você deseja converter em K"));
console.log(d2 + 273.15);

// Questão 2:

let e = 280 * 0.05;
console.log("O valor a ser pago é:", e, "reais.");

let f = (280 * 0.05)* 0.85;
console.log("O valor a ser pago, considerando 15% de desconto é:", f, "reais.");  

// Questão 3:

let kg1 = 20/2.2046
console.log("20lb equivalem a", kg1, "kg");

/* 
    16 oz = 1 lb, portanto:
    10.5 oz = 6.5625 lb

*/

let kg2 = 6.5625/2.2046;
console.log("10.5 oz equivalem a", kg2, "kg");

let me = 100 * 1609.344;
console.log("100 mi equivalem a", me, "m");

let me1 = 50/3.28
console.log("50 ft equivalem a", me1, "m");

let li = 103.56 * 3.785;
console.log("103.56 gal equivalem a", li, "l");

// 1 xícara = 240ml --> 450 xc = 108 000 ml

let li1 = 108000/1000;
console.log("450 xic equivalem a", li1, "l");

let kg3 = Number(prompt("Coloque o valor em libras para converter em quilogramas."));
let kg4 = kg3 / 2.2046;
console.log(kg3, "libras são exatamente", kg4, "quilogramas");