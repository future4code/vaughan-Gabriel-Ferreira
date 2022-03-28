import { Posts } from "../ex5"
console.log("Exercício 6:")

// Acabei resolvendo criar o array de posts fora do array de
// usuários, porque por enquanto não estamos mexendo com autenticação.
// Além disso, admito que senti que seria mais fácil >.<

export const arrayDePosts: Posts[] = [
    {
        id: 1,
        title: 'oi',
        body: 'td bem?',
        userId: 1
    },
    {
        id: 2,
        title: 'oi',
        body: 'marromenos',
        userId: 2
    },
    {
        id: 3,
        title: 'oi',
        body: 'suave como sempre',
        userId: 3
    },
    {
        id: 4,
        title: 'oi',
        body: 'ai ai...',
        userId: 2
    },
] 

console.log(arrayDePosts)