// Exercício 2 letra C
import knex from "knex"
import connection from "../data/connection"

export const createUser = async(id: string, email: string, password: string) => {
    await connection("User")
    .insert({
        id,
        email,
        password
    })
    .into("User")
}