export type User = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    transactions: number[]
}

// export type Transaction = {
//     addedValue: number,
//     subtractedValeu: number
// }
// Fiquei confuso com essa ideia de criar um tipo para as transações que
// serão salvas no extrato.

export const users: User[] = [
    {
        name: "Armando",
        cpf: "123.456.789-00",
        birthDate: "01/01/1991",
        balance: 100,
        transactions: []
    },
    {
        name: "Bruna",
        cpf: "987.654.321-00",
        birthDate: "02/02/1992",
        balance: 50,
        transactions: []
    },
    {
        name: "Carlos",
        cpf: "111.111.111-00",
        birthDate: "03/03/1993",
        balance: 70,
        transactions: []
    },
    {
        name: "Daniela",
        cpf: "222.222.222-00",
        birthDate: "04/04/1994",
        balance: 10,
        transactions: []
    },
]