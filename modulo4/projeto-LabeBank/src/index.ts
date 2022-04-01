import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './data/data'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/user/create', (req: Request, res: Response) => {
    const newUser: User = {
        name: req.body.name,
        cpf: req.body.cpf,
        birthDate: req.body.birthDate,
        balance: 0,
        transactions: []
    }
    users.push(newUser)
	res.send(users)
})

app.get('/user', (req: Request, res: Response) => {
    res.send(users)
})

let today = new Date().toLocaleDateString()
let dateArray = today.split("/")
console.log(today)
console.log(dateArray)

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003")
})