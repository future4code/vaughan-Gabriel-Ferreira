import {Request, Response} from "express"
import connection from "../connection"

export const addProduct = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const {name, price, image_url} = req.body
        const id = Date.now()

        await connection("labecommerce_products")
        .insert({id, name, price, image_url})
        res.status(201).end("Produto adicionado com sucesso")
        
    } catch (error) {
        res.status(500).end()
    }
}