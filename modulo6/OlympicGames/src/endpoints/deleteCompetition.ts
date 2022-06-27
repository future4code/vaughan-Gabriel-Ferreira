import {Request, Response} from "express"
import connection from "../connection"

export const deleteCompetition = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const {competicao} = req.body

        await connection("COMPETICOES")
        .delete("*")
        .where("competicao", competicao)
        res.status(201).end("Competição deletada com sucesso")
        
    } catch (error) {
        res.status(500).end()
    }
}