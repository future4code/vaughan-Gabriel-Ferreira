import connection from "./connection"


export const getUserById = async (id: string): Promise<any> => {
    const result = await connection("User")
    .select("*")
    .from("User")
    .where({ id })

    return result[0]
}