import { Request, Response } from "express"
import connection from "../connection"
import { orderBiggestToLowestValue } from "../functions/orderBiggestToLowestValue"

export const getDartRanking = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const ranking = await connection("COMPETICOES")
            .from("COMPETICOES")
            .select("*")
            .where("competicao", "Lançamento de Dardo")

        const newRanking = ranking.sort(orderBiggestToLowestValue)
        res.status(200).send(newRanking)

    } catch (error) {
        res.status(500).end()
    }
}