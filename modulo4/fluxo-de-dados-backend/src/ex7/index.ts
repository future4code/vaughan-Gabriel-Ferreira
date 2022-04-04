import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 7:')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/add-product', (req, res) => {
	try {
		const newProductId = productsList.length + 1
		const newProduct = {
			id: newProductId.toString(),
			name: req.body.name,
			price: req.body.price
		}
		if (!req.body.price && !req.body.name) {
			throw new Error("Preencha o 'name' e o 'price'!")
		}
		if (!req.body.name) {
			throw new Error("Não esqueça de preencher o 'name'!")
		}
		if (!req.body.price) {
			throw new Error("Não esqueça de preencher o 'price'!")
		}
		if (typeof req.body.name !== typeof "ola") {
			throw new Error("'name' precisa ser do tipo string!")
		}
		if (typeof req.body.price !== typeof 1) {
			throw new Error ("'price' precisa ser do tipo number!")
		}
		if (req.body.price <= 0) {
			throw new Error("O preço inserido precisa ser maior que zero!")
		}
		productsList.push(newProduct)

		res.send(productsList)

	} catch (e: any) {
		switch (e.message) {
			case "Não esqueça de preencher o 'name'!":
				res.status(400).send(e.message)
				break
			case "Não esqueça de preencher o 'price'!":
				res.status(400).send(e.message)
				break
			case "Preencha o 'name' e o 'price'!":
				res.status(400).send(e.message)
				break
			case "'name' precisa ser do tipo string!":
				res.status(400).send(e.message)
				break
			case "O preço inserido precisa ser maior que zero!":
				res.status(400).send(e.message)
				break
			default: 
				res.status(500).send(e.message)
				break
		}
	}

})

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});