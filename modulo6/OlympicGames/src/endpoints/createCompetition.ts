import {Request, Response} from "express"
import connection from "../connection"

export const createCompetition = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const {competicao, atleta, value, unidade} = req.body
        const id = Date.now()

        await connection("COMPETICOES")
        .insert({id, competicao, atleta, value, unidade})
        res.status(201).end("Competição e resultado criados com sucesso")
        
    } catch (error) {
        res.status(500).end()
    }
}