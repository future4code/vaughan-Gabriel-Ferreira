import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { user, users, UserType } from '../data/data'

console.log("exercício 4:")

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

app.put('/users', (req: Request, res: Response) => {
    const newUser: user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        age: req.body.age
    }

    users.push(newUser)
	res.send(users)
})

// A) Nada mudou.
// B) Acredito que o método PUT não seja o mais apropriado. O método POST
// é o mais apropriado, porque ele é responsável pela criação de novos
// recursos. O método PUT seria responsável apenas por atualizar recursos