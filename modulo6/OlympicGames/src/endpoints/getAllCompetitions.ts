import { Request, Response } from "express"
import connection from "../connection"

export const getAllCompetitions = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const competicoes = await connection("COMPETICOES")
            .from("COMPETICOES")
            .select("*")

        res.status(200).send(competicoes)

    } catch (error) {
        res.status(500).end()
    }
}