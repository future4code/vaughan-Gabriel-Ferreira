console.log("Exercício 6:")

type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

let clientes: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

//Como conseguir somatório de array: 

const somaDebito = (array: number[]) => {
    return array.reduce((partialSum, a) => partialSum + a, 0)
}

// Função para atualizar saldo total:

const atualizaSaldo = (array: Clientes[]) => {
    let arrayAtualizado = array.map((item) =>{
        let novoSaldo = item.saldoTotal - somaDebito(item.debitos)        
        let clientesComNovoSaldo = {
            cliente: item.cliente,
            saldoTotal: novoSaldo
        } 

        return clientesComNovoSaldo
    })
    
    return arrayAtualizado
}

let clientesAtualizado = atualizaSaldo(clientes)
console.log('Clientes atualizados:', clientesAtualizado)

let clientesDevedores = clientesAtualizado.filter((item) => {
    return item.saldoTotal < 0
})

console.log(clientesDevedores)