console.log('Esse é o exercício 4:')
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// A) Basta usar um script que dê o comando tsc ./ex4, ou dar
// esse comando no próprio terminal.

// B) Só seria necessário indicar o caminho até o arquivo, por
// exemplo: tsc ./src/ex4

// C) Sim! A forma que encontrei é encadear comandos tsc no
// script "start". Por exemplo assim: 
// "start": tsc ./ex4.ts && tsc ./ex5.ts