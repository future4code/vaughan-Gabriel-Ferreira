console.log('Exercício 5:')

function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ) {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? console.log("Passou dos 5 anos. Precisa renovar.") : console.log("Ainda não passou dos 5 anos. Não precisa renovar por enquanto.")
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? console.log("Passou dos 10 anos. Precisa renovar.") : console.log("Ainda não passou dos 10 anos. Não precisa renovar por enquanto.")
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? console.log("Passou dos 15 anos. Precisa renovar.") : console.log("Ainda não passou dos 15 anos. Não precisa renovar por enquanto.")
       
       }else {
           return console.log("error")
       }
   }

const anoAtual = 2022
const anoNascimento = Number(process.argv[2])
const anoEmissao = Number(process.argv[3])
checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao)