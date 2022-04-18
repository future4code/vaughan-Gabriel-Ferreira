import { Request, Response } from "express"
import connection from "../connection"

export const getUserPurchases = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const userPurchases = await connection("labecommerce_purchases")
        .from("labecommerce_purchases")
        .select("*")
        .where("user_id", req.params.user_id) 
        console.log(userPurchases)

        res.status(200).send(userPurchases)

    } catch (error) {
        res.status(500).end()
    }
}