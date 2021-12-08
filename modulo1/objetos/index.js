// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Questão 1:
// A. 
// Matheus Nachtergaele
// Virgina Cavendish
// canal: 'Globo', horario: '14h'

// Questão 2:
// A. 
// nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD' 
// 
// B.
// Copia as informações do objeto
// 
// Questão 3:
// A. 
// false
// undefined
// undefines
// 
// B. Não sei por que que isso aconteceu

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 
// Questão 1:

const pessoa = {
    nome: "João Paulo",
    apelidos: ['JP', 'Jopmol', 'Jaço']
}

function fnome () {
    return  console.log(`Meu nome é ${pessoa.nome},
mas pode me chamar de: ${pessoa.apelidos[0]},
${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)    
}

fnome()

const joaozinho = {
    ...pessoa,
    apelidos: [ 'Jotapê', 'Ojota', 'Paulin']  
}

console.log(joaozinho)

// Questão 2:

const pessoa1 = {
    nome: 'Raimundo',
    idade: Number(16),
    profissao: 'Guerreiro Xiaolin'
} 

const pessoa2 = {
    nome: 'Julia',
    idade: Number(15),
    profissao: 'A Guerreira Xiaolin'
}

function duasPessoas (pessoa, outraPessoa) {
    return console.log(pessoa.nome, pessoa.nome.length,
    pessoa.idade, pessoa.profissao,
    pessoa.profissao.length,
    outraPessoa.nome, outraPessoa.nome.length,
    outraPessoa.idade, outraPessoa.profissao,
    outraPessoa.profissao.length
    )
}

duasPessoas(pessoa1, pessoa2)

const carrinho = ['']

const fruta1 = {
    nome: 'mamao',
    disponibilidade: true
}

const fruta2 = {
    nome: 'maca',
    disponibilidade: true
}

const fruta3 = {
    nome: 'banana',
    disponibilidade: true
}

function colocarFrutanoCarrinho (fruta) {
    carrinho.push(fruta)
}

colocarFrutanoCarrinho(fruta1)
colocarFrutanoCarrinho(fruta2)
colocarFrutanoCarrinho(fruta3)

console.log(carrinho)

// DESAFIO
// Questão 1:
function enchecaoDeSaco(){
    const onome = prompt("Qual é o seu nome?")
    const aidade = prompt("Qual é a sua idade?")
    const aprofissao = prompt("Qual é a sua profissão?")

    const oobjeto = {
        nome: onome,
        idade:  aidade,
        profissao:  aprofissao
    }
    return console.log(oobjeto, typeof(oobjeto))
}

enchecaoDeSaco()

// Questão 2:

const filme1 = {
    nome: 'Matrix',
    anoDeLancamento: 1999
}

const filme2 = {
    nome: 'Django',
    anoDeLancamento: 2013
}

function comparaFilmes (filme, filme1) {
    console.log
    ('O primeiro filme foi lançado antes do segundo?'
    , filme.anoDeLancamento < filme1.anoDeLancamento)

    console.log(
      'O primeiro filme foi lançado no mesmo ano do segundo?',
    filme.anoDeLancamento === filme1.anoDeLancamento)
}

comparaFilmes(filme1, filme2)

// Questão 3:

function disponibilidadeFruta(fruta){
    return console.log(!fruta.disponibilidade)

}

disponibilidadeFruta(fruta1)

