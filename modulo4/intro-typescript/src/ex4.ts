function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero: number;
    let menorNumero: number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca 
  }

let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])

console.log(comparaDoisNumeros(num1, num2))