import { v4 } from "uuid"

// Letra B do exercício 1

export const generateId = (): string => {
    return v4()
}