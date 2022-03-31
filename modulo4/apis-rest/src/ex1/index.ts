import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { users } from '../data/data'

console.log("exercício 1:")

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

app.get('/users', (req: Request, res: Response) => {
	res.send(users)
})

// A) O método get.
// B) Pelo URL que foi utilizado. No caso, users.