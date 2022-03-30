console.log("Exercício 2:")

const mostraTipo = (param: string | number | boolean | number[] | string[] | boolean[] | object) => {
    return console.log(typeof param)
}

let exemplo: number = 2
let exemplo1: string = 'Oi'
let exemplo2: boolean = true
let exemplo3: number[] = [1, 2, 3]

// Por algum motivo ele fala object no exemplo 3 O.o

mostraTipo(exemplo3)
console.log("Object?")