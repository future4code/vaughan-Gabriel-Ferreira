import * as express from 'express'
import * as cors from 'cors'
import { arrayDePosts } from '../ex6'

console.log("Exercício 8:")

const app = express()
app.use(express.json())

app.get("/posts/:id", (req, res) => {          
    res.send(arrayDePosts.filter((post) => {
        return post.userId === Number(req.params.id)
    }))
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
