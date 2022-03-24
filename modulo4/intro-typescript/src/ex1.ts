function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

const a1 = Number(process.argv[2])
const b1 = Number(process.argv[3])
const c1 = Number(process.argv[4])

console.log(checaTriangulo(a1, b1, c1))