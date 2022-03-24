// EXERCÍCIO 1

// A) Para acessar os parâmtros passados na linha de comando para o Node, 
//    podemos utilizar o comando: console.log(process.argv).

// B) e C)

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos`)