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

    function getAge(dateString: string | number | Date) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    if (getAge(req.body.birthDate) < 18)  {
        res.status(400).send("Para se cadastrar, é necessário que o usuário tenha 18 anos ou mais.")
    } else {
        users.push(newUser)
        res.send(users)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})