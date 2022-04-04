import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { users, UserType } from '../data/data'

console.log("exercício 2:")

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get('/users', (req: Request, res: Response) => {
    if (req.query.type.toString() === "normal") {
        let normalUsers = users.filter((user) => {
            return user.type === "NORMAL"
        })
        res.send(normalUsers)
    } else if(req.query.type.toString() === "admin") {
        let adminUsers = users.filter((user) => {
            return user.type === "ADMIN"
        })
        res.send(adminUsers)
    } else {
        res.status(400).send("É necessário que a query inserida tenha o valor 'normal' ou 'admin'.")
    }

})

// A) Passei os parâmetros de type para a requisição por meio
// de uma query, porque foi falado em aula que esse é o 
// parâmetro utilizado para consulta.

// B) Sim. Basta colocar uma condição. Caso a query inserida
// seja qualquer coisa diferente de "normal" ou "admin", o erro
// será acusado e orientará a pessoa que está enviando a requisição.
