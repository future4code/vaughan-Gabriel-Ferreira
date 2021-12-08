// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Digite aqui a altura do seu retângulo")
  let largura = prompt("Digite aqui a largura do seu retângulo")
  let resultado = altura * largura
  return console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual é o ano atual?")
  let anoDeNascimento = prompt("Qual, com todo respeito, foi o ano em que você nasceu?")
  let idade = anoAtual - anoDeNascimento
  return console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Quantos anos você tem? Com todo respeito, é claro...")
  const email = prompt("Qual é o seu email?")

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual é a sua cor favorita?")
  const cor2 = prompt("Qual é a vice?")
  const cor3 = prompt("Qual recebe a medalha de bronze?")

  const listaCores = [cor1, cor2, cor3]
  return console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  
  const quantiaIngressos = custo / valorIngresso
  return quantiaIngressos  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const elementoFinal = array[array.length - 1]

  let array1 = array
  array1[0] = elementoFinal
  array1[array1.length - 1] = primeiroElemento

  return array1
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  
  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const nascimentoPessoa = Number(prompt("Digite aqui a data de nascimento de uma pessoa. Mais uma vez, com todo respeito."))
  const anoCarteira = Number(prompt("Digite aqui o ano em que sua carteira de identidade foi emitida"))
  const idadePessoa = anoAtual - nascimentoPessoa 
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maioridade = prompt("É maior de 18?")
  const ensinoMedio = prompt("Tem ensino médio completo?")
  const disponibilidade = prompt("Possui disponibilidade exclusiva durante os horários do curso?")

  console.log("sim" === maioridade && "sim" === ensinoMedio && "sim" === disponibilidade)


}