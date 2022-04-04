import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 6:')

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/:id', (req, res) => {
    let filteredList = productsList.filter(products => {
        return products.id !== req.params.id
    })

	res.send(filteredList)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});