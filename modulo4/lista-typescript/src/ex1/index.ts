console.log('Exercício 1:')

const cumprimento = (nome: string, nascimento: string) => {
    let data = nascimento.split("/")    
    return `Olá, me chamo ${nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano ${data[2]}`
}

console.log(cumprimento(process.argv[2], process.argv[3]))