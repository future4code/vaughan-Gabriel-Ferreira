import { Request, Response } from "express"
import { createUser } from "../services/createUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"

export const signUpUser = async (req: Request, res: Response) => {
    try {


        // Exercício 4 letra B (validação do email)
    if(!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email")
    }
        // Exercício 4 letra C (validação da senha)
    if(!req.body.password || req.body.password.length < 6) {
        throw new Error ("Password must have at least 6 characters.")
    }

    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    const id = generateId()

    await createUser(id, userData.email, userData.password)

    const token = generateToken({
        id,
    })

    res.status(200).send(
        token
    )
        
    } catch (err: any) {
        res.status(400).send({
            message: err.message
        })
    }
}