import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { users } from '../data/data'

console.log("exercício 3:")

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

app.get('/users', (req: Request, res: Response) => {
    let nameSearch = users.filter(user => {
        return user.name.toLowerCase().includes(req.query.name.toString())
    })
    if(nameSearch.length > 0) {
        res.send(nameSearch)
    } else {
        res.status(404).send("User not found")
    }
})

// A) Imagino que seja query, porque é uma consulta.
// B) Ok