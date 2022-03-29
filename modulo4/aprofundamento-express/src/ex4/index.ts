import * as express from 'express'
import * as cors from 'cors'
import { tasksList } from '../ex3'
import { Tasks } from '../ex2'

console.log("Exercício 4:")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/completed-tasks", (req, res) => {  
    const filteredTasks: Tasks[] = tasksList.filter((task) => {
        return task.completed === true
    })    
	res.send(filteredTasks)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003")
})

