// EXERCÍCIO 2

const operacao = process.argv[2]
const primeiroValor = Number(process.argv[3])
const segundoValor = Number(process.argv[4])

switch(operacao){
	case "soma":
		console.log(primeiroValor + segundoValor)
		break;
	case "subt":
		console.log(primeiroValor - segundoValor)
		break;
    case "mult":
        console.log(primeiroValor * segundoValor)
        break;
    case "div":
        console.log(primeiroValor / segundoValor)
        break;
}
