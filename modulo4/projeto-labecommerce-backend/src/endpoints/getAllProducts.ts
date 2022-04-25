import { Request, Response } from "express"
import connection from "../connection"

export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const products = await connection("labecommerce_products")
            .from("labecommerce_products")
            .select("*")

        res.status(200).send(products)

    } catch (error) {
        res.status(500).end()
    }
}