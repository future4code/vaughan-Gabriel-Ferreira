import connection from "../data/connection";

// Exercício 5:

export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection("User")
      .select("*")
      .from("User")
      .where({ email });
 
    return result[0];
   }
