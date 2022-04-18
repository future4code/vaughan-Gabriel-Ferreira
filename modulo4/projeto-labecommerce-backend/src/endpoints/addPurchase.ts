import {Request, Response} from "express"
import connection from "../connection"

export const addPurchase = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const {user_id, product_id, quantity} = req.body
        const id = Date.now()

        const price = await connection("labecommerce_products")
        .select("price")
        .where("id", product_id)

        const total_price = price[0].price * quantity

        await connection("labecommerce_purchases")
        .insert({id, user_id, product_id, quantity, total_price})
        res.status(201).end("Compra cadastrada com sucesso")
        
    } catch (error) {
        res.status(500).end()
    }
}