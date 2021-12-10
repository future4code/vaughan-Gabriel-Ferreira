/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

const confirm = prompt("Quer iniciar uma nova rodada?")
if(confirm === 'Ok'){

   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   
   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const pontosUsuario = cartaUsuario.valor + cartaUsuario2.valor
   const pontosComputador = cartaComputador.valor + cartaComputador2.valor


   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${pontosUsuario}`)
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - pontuação ${pontosComputador}`)

   if (pontosUsuario > pontosComputador) {
      console.log("Parabéns, você venceu!")
   } else if (pontosUsuario === pontosComputador) {
      console.log("Que disputa incrível! Ocorreu um empate!")
   } else {
      console.log("Que pena, o computador venceu ):")
   }

} if (confirm === 'cancel') {
   console.log("O jogo acabou")
}