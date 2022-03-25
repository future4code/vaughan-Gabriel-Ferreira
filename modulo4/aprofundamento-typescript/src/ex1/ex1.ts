// Exercício 1

// A)
// let minhaString: string
// minhaString = 28

// Resposta: É acusado um erro que diz que o tipo 'number' não 
// pode ser designado para o tipo 'string'

// B)
   let meuNumero: number | string
   meuNumero = 'oi'
   console.log(meuNumero)
   meuNumero = 28
   console.log(meuNumero)

// Resposta: Para fazermos uma variável aceitar tanto o tipo
// 'number' quanto o tipo 'string', separamos esses dois tipos
// por um pipe na hora da declaração de tipo da variável.

// C)
   let meuObjeto: {nome: string, idade: number, corFavorita: string} = {
       nome: 'Gabriel',
       idade: 24,
       corFavorita: 'Vinho'
   }

   console.table(meuObjeto)

   type Person = {
       nome: string,
       idade: number,
       corFavorita: string
   }   

   let primeiroObjeto: Person = {
       nome: 'João',
       idade: 26,
       corFavorita: 'Preto'
   }

   let segundoObjeto: Person = {
       nome: "José",
       idade: 30,
       corFavorita: "Azul"
   }

   let terceiroObjeto: Person = {
       nome: "Roberto",
       idade: 27,
       corFavorita: "Vermelho"
   }

   // D) 

   enum aCorFavorita {
        VERMELHO = "Vermelho",
        LARANJA = "Laranja",
        AMARELO = "Amarelo",
        VERDE = "Verde",
        AZUL = "Azul",
        ANIL = "Anil",
        VIOLETA = "Violeta" 
   }

   type NovaPerson = {
       nome: string,
       idade: number,
       corFavorita: aCorFavorita
   }

   let ultimoObjeto: NovaPerson = {
       nome: "Último",
       idade: 10000,
       corFavorita: aCorFavorita.VERDE
   }
   console.table(ultimoObjeto)