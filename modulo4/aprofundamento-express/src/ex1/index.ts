import * as express from 'express'
import * as cors from 'cors'

console.log("Exercício 1:")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (req, res) => {          
	res.send("PONG!")
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003")
})