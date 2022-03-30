import * as express from 'express'
import * as cors from 'cors'
import { Tasks } from '../ex2'
import { tasksList } from '../ex3'

console.log("Exercício 5:")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/add-task", (req, res) => {
    const newTask: Tasks = req.body
    tasksList.push(newTask) 
	res.send(tasksList)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003")
})