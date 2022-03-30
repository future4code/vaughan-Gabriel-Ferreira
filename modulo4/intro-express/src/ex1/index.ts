import * as express from 'express'
import * as cors from 'cors'

console.log("Exercício 1:")

const app = express()
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})