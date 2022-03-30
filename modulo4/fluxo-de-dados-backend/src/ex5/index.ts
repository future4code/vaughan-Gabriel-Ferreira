import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 5:')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/edit/:id/price', (req, res) => {
    const checkid = (product: any) => {
        return product.id == req.params.id;
    }

    productsList.find(checkid).price = req.body.price

	res.send(productsList)
})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});