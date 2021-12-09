// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Questão 1:
// O código está fazendo um loop. Na verdade, não sei por que foi impresso 10 no console.

// Questão 2:
// A. 19
//    21
//    23
//    25
//    27
//    30

// B. 

// Questão 3:
//  *
//  **
//  ***
//  ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Questão 1:
// A, B E C:
let quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
if(quantidadeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else{
    let bichinhos = []
    for(let i = quantidadeBichinhos; i > 0 ; i--){
        
        let nomesBichinhos = prompt("Digite aqui o nome dos seus bichinhos, um por vez")
        bichinhos.push(nomesBichinhos)        
    }
console.log(bichinhos)
}

// Questão 2:

let arrayOriginal = [13, 19, 18, 22, 78, 96, 151]

// A.

for(let i = 0; i !== arrayOriginal.length - 1; i++){
    console.log(arrayOriginal[i])
}

// B.

for(let i = 0; i !== arrayOriginal.length - 1; i++){
    console.log(arrayOriginal[i] / 10)
}

// C. 

for(let i = 0; i !== arrayOriginal.length - 1; i++){
    
    if (arrayOriginal[i] % 2 === 0) {
        console.log(arrayOriginal[i])
    }    
}

// D. 

let arrayNovo =[]

for(let i = 0; i !== arrayOriginal.length - 1; i++){
    let frase = console.log(`O elemento do índex ${i} é: ${typeof(arrayOriginal[i])}`)
    arrayNovo.push(frase)
}
console.log(arrayNovo)

// E.

function devolverMaiorEMenorNumeroDoArray (array) {
    let maiorNumero = 0
    let menorNumero = 999999999999999999999999999999999999999999999999999999999999999999999999999999

    for (let i = 0; i < array.length; i++){
        if(maiorNumero < array[i]) {
            maiorNumero = array[i]
        }
    }
        
    for (let i = 0; i < array.length; i++)
        if(menorNumero > array[i]) {
            menorNumero = array[i]
        }
    
    return console.log(`O mario número é ${maiorNumero} e o menor número é ${menorNumero}.`)
}

devolverMaiorEMenorNumeroDoArray(arrayOriginal)