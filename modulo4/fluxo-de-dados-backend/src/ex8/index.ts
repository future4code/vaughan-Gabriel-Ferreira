import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 8:')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/edit/:id/price', (req, res) => {
    try {
        const checkid = (product: any) => {
            return product.id == req.params.id;
        }
        if(!req.body.price){
            throw new Error ("'price' não foi recebido!") 
            //Eu fiquei confuso sobre essa ideia de o 'price' não ser recebido.
            //Não sei se é por causa da lógica que eu acabei fazendo ou se eu 
            //Interpretei mal alguma parte do exercício. Por favor, se quem estiver
            //corrigindo isso puder botar um feedback eu agradeceria. :) 
        }
        if(req.body.price <= 0) {
            throw new Error ("O valor 'price' precisa ser maior que zero!")
        }        
        if(typeof req.body.price !== typeof 1) {
            throw new Error ("O tipo de 'price' precisa ser number!")
        }
        if(!productsList.find(checkid)) {
            throw new Error ("O produto a ser editado não foi encontrado!")
        }
        
        productsList.find(checkid).price = req.body.price

        res.send(productsList)

    } catch (e: any) {
        switch (e.message) {
			case "O valor 'price' precisa ser maior que zero!":
				res.status(400).send(e.message)
				break
			case "'price' não foi recebido!":
				res.status(400).send(e.message)
				break
			case "O tipo de 'price' precisa ser number!":
				res.status(400).send(e.message)
				break
			case "O produto a ser editado não foi encontrado!":
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