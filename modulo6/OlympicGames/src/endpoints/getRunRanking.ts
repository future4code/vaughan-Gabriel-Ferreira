import { Request, Response } from "express"
import connection from "../connection"
import { orderLowestToBiggestValue } from "../functions/orderLowestToBiggestValue"

export const getRunRanking = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const ranking = await connection("COMPETICOES")
            .from("COMPETICOES")
            .select("*")
            .where("competicao", "100m rasos")

        const newRanking = ranking.sort(orderLowestToBiggestValue)
        res.status(200).send(newRanking)

    } catch (error) {
        res.status(500).end()
    }
}