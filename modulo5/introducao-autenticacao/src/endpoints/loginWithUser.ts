import { Request, Response } from "express"
import { createUser } from "../services/createUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { getUserByEmail } from "../services/getUserByEmail"

export const loginWithUser = async (req: Request, res: Response) => {
    try {

        // Exercício 5 letra B (validação do email)
    if(!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email")
    }

    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    const user = await getUserByEmail(userData.email)

    if (user.password !== userData.password) {
        throw new Error ("Invalid passWord")
    }

    const token = generateToken({
        id: user.id
    })

    res.status(200).send(token)
        
    } catch (err: any) {
        res.status(400).send({
            message: err.message
        })
    }
}