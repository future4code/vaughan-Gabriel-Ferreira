console.log('Esse é o exercício 2:')

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

let arr: number[] = [1, 2, 3, 4, 5]

console.table(obterEstatisticas(arr))

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}

let amostra: AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function (numeros: number[]): {} {
        return obterEstatisticas(numeros)
    }
}