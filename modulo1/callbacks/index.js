// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// Questão 1:
// A. 
// nome: "Amanda Rangel", apelido: "Mandi", 0,  { nome: "Amanda Rangel", apelido: "Mandi" },
//                                              { nome: "Laís Petra", apelido: "Laura" },
//                                              { nome: "Letícia Chijo", apelido: "Chijo" }

// nome: "Laís Petra", apelido: "Laura" }, 1,   { nome: "Amanda Rangel", apelido: "Mandi" },
//                                              { nome: "Laís Petra", apelido: "Laura" },
//                                              { nome: "Letícia Chijo", apelido: "Chijo" }

// nome: "Letícia Chijo", apelido: "Chijo" }, 2,{ nome: "Amanda Rangel", apelido: "Mandi" },
//                                              { nome: "Laís Petra", apelido: "Laura" },
//                                              { nome: "Letícia Chijo", apelido: "Chijo" }

// Questão 2:
// A. "Amanda Rangel", "Laís Petra", "Letícia Chijo"

// Questão 3:
// A. { nome: "Amanda Rangel", apelido: "Mandi" }
//    { nome: "Laís Petra", apelido: "Laura" }

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Questão 1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// A. 

    const nomeDosPets = pets.map((nomePet, i, array) => {
        return nomePet.nome
    })

// B.

    const onlySalsicha = pets.filter((racaPet, i, array) => {
        return racaPet.raca === 'Salsicha'
    })

// C. 

    const onlyPoodle = pets.filter((racaPet, i, array) => {
        return racaPet.raca === 'Poodle'
    })

    const mensagens = onlyPoodle.map((nomePet) => {
        return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePet.nome}`)
    })

// Questão 2:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// A. 

const nomesProdutos = produtos.map((nome) => {
    return nome.nome
})

console.log(nomesProdutos)

// B. 

const nomePrecoDesconto = [produtos.map((nome, i, array) => {
   return nome.nome, nome.preco * 0.95 
})]

// C.

const onlyBebidas = produtos.filter((nome) => {
    return nome.categoria === "Bebidas"
})

// D. 

const apenasYpe = produtos.filter((nome) => {
    return nome.nome.includes("Ypê")
})
console.log(apenasYpe)

// E.

const propagandaAgressiva = apenasYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(apenasYpe)
console.log(propagandaAgressiva)