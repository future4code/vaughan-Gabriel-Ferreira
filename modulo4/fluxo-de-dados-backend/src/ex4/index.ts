import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 4:')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/all-products', (req, res) => {
	res.send(productsList)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});