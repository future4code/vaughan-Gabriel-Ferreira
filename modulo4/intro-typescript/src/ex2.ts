import { preProcessFile } from "typescript"

function imprimeTresCoresFavoritas(a:string, b: string, c: string) {
    return console.log(`Suas cores favoritas são: ${a}, ${b} e ${c}`)
}
const a = process.argv[2]
const b = process.argv[3]
const c = process.argv[4]

imprimeTresCoresFavoritas(a, b, c)

