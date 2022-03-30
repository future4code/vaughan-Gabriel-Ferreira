import * as express from 'express'
import * as cors from 'cors'
import { arrayDePosts } from '../ex6'

console.log("Exercício 7:")

const app = express()
app.use(express.json())

app.get("/posts", (req, res) => {          
    res.send(arrayDePosts)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
