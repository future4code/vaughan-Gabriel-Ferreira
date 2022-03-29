import * as express from 'express'
import * as cors from 'cors'
import { tasksList } from '../ex3'

console.log("Exercício 6:")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/edit/:id/task-status", (req, res) => {  
    const taskId = req.params
    const newStatus = req.body.completed

    let taskToEdit = tasksList.filter(task => {
        return Number(taskId) === task.id
    })
    
    let object = taskToEdit.flat(1)
    object.completed === newStatus

    let otherTasks = tasksList.filter(task => {
        return Number(taskId) !== task.id
    })

    otherTasks.push(taskToEdit)



    
    
	res.send("PONG!")
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003")
})