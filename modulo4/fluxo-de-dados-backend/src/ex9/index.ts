import * as express from 'express'
import * as cors from 'cors'
import { productsList } from '../ex2/data'

console.log('Exercício 9:')

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/delete/:id', (req, res) => {

    try {
        let filteredList = productsList.filter(products => {
            return products.id !== req.params.id
        })
        if (filteredList.length === productsList.length) {
            throw new Error("O produto a ser deletado não foi encontrado!")
        }

        res.send(filteredList)

    } catch (e: any) {
        switch (e.message) {
            case "O produto a ser deletado não foi encontrado!":
                res.status(400).send(e.message)
                break
            default:
                res.status(500).send(e.message)
        }
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});