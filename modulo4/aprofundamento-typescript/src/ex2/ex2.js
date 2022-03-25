console.log('Esse é o exercício 2:');
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
var arr = [1, 2, 3, 4, 5];
console.table(obterEstatisticas(arr));
var amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function (numeros) {
        return obterEstatisticas(numeros);
    }
};
console.log(amostra);
