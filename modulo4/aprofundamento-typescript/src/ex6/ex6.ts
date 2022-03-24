console.log('Esse é o exercício 6:')

type NomeIdadeData = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

let arrayDeConsultas: NomeIdadeData[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

console.log(`Antes: ${arrayDeConsultas}`)

const organizaConsultas = (array: NomeIdadeData[]) => {
  
  array.sort((a, b) => {
    let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();
  
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
}

organizaConsultas(arrayDeConsultas)

console.log(`Depois: ${arrayDeConsultas}`)