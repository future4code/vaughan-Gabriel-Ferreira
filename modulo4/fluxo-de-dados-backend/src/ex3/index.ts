import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 3:')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/add-product', (req, res) => {
    const newProductId = productsList.length + 1
    const newProduct = {
        id: newProductId.toString(),
        name: req.body.name,
        price: req.body.price
    }
    productsList.push(newProduct)
    
	res.send(productsList)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});