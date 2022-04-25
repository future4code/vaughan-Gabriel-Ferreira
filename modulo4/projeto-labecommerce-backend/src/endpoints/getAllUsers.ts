import { Request, Response } from "express"
import connection from "../connection"

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const users = await connection("labecommerce_users")
            .from("labecommerce_users")
            .select("*")

        res.status(200).send(users)

    } catch (error) {
        res.status(500).end()
    }
}