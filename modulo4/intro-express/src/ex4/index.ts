import {usersArray} from '../ex3/index'
import * as express from 'express'
import * as cors from 'cors'

console.log("Exercício 4:")

const app = express()
app.use(express.json())

app.get("/users", (req, res) => {          
    res.send(usersArray)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})