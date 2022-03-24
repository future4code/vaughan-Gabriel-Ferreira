// Exercício 1
// A)
// let minhaString: string
// minhaString = 28
// Resposta: É acusado um erro que diz que o tipo 'number' não 
// pode ser designado para o tipo 'string'
// B)
var meuNumero;
meuNumero = 'oi';
console.log(meuNumero);
meuNumero = 28;
console.log(meuNumero);
// Resposta: Para fazermos uma variável aceitar tanto o tipo
// 'number' quanto o tipo 'string', separamos esses dois tipos
// por um pipe na hora da declaração de tipo da variável.
// C)
var meuObjeto = {
    nome: 'Gabriel',
    idade: 24,
    corFavorita: 'Vinho'
};
console.table(meuObjeto);
var primeiroObjeto = {
    nome: 'João',
    idade: 26,
    corFavorita: 'Preto'
};
var segundoObjeto = {
    nome: "José",
    idade: 30,
    corFavorita: "Azul"
};
var terceiroObjeto = {
    nome: "Roberto",
    idade: 27,
    corFavorita: "Vermelho"
};
// D) 
var aCorFavorita;
(function (aCorFavorita) {
    aCorFavorita["VERMELHO"] = "Vermelho";
    aCorFavorita["LARANJA"] = "Laranja";
    aCorFavorita["AMARELO"] = "Amarelo";
    aCorFavorita["VERDE"] = "Verde";
    aCorFavorita["AZUL"] = "Azul";
    aCorFavorita["ANIL"] = "Anil";
    aCorFavorita["VIOLETA"] = "Violeta";
})(aCorFavorita || (aCorFavorita = {}));
var ultimoObjeto = {
    nome: "Último",
    idade: 10000,
    corFavorita: aCorFavorita.VERDE
};
console.table(ultimoObjeto);
