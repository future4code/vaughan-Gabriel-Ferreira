console.log("Exercício 3:")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoDeLancamento: string,
    genero: GENERO,
    pontuacao?: string
}

let filmeExemplo: Filme ={
    nome: "Pulp Fiction",
    anoDeLancamento: "18/02/1995",
    genero: GENERO.ACAO,
}

const tipificaFilme = (nome: string, anoDeLancamento: string, genero: GENERO, pontuacao?: string) => {    
    if(pontuacao) {
        let filmeTipificado: Filme = {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
            pontuacao: pontuacao
        }

        return filmeTipificado
    } else {
        
            let filmeTipificado: Filme = {
                nome: nome,
                anoDeLancamento: anoDeLancamento,
                genero: genero,
            }

            return filmeTipificado

    }
}

console.log(tipificaFilme('Pulp Fiction', "18/02/1995", GENERO.ACAO, '1000000000'))