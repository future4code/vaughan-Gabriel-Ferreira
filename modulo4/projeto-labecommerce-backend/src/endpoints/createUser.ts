import {Request, Response} from "express"
import connection from "../connection"

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const {name, email, password} = req.body
        const id = Date.now()

        await connection("labecommerce_users")
        .insert({id, name, email, password})
        res.status(201).end("Usuário criado com sucesso")
        
    } catch (error) {
        res.status(500).end()
    }
}