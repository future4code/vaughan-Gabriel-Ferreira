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

    const confirmacao = prompt("Quer iniciar uma nova rodada?")
    if(confirmacao === 'Ok'){
    
       let maoUsuario = [comprarCarta(), comprarCarta()]
       
      //  while(maoUsuario[0].texto.includes('A') && maoUsuario[1].texto.includes('A')){
      //     maoUsuario[0] = comprarCarta()
      //     maoUsuario[1] = comprarCarta()
      //  }
       
       const cartaComputador = comprarCarta()
       const cartaComputador2 = comprarCarta()

      //  while(cartaComputador.texto.includes('A') && cartaComputador2.texto.includes('A')){
      //     cartaComputador = comprarCarta()
      //     cartaComputador2 = comprarCarta()
      //  }   
       let cartasMaoUsuario = maoUsuario.map((carta) => {
          return carta.texto
       })

       let maisUmaCarta = confirm(`Suas cartas são ${cartasMaoUsuario}. A carta revelada do computador é ${cartaComputador.texto} \nDeseja comprar mais uma carta?`)

         while(maisUmaCarta === true){
            maoUsuario.push(comprarCarta())
            let cartasMaoUsuario = maoUsuario.map((cartas) => {
               return cartas.texto
            })
            maisUmaCarta = confirm(`Suas cartas são ${cartasMaoUsuario}. A carta revelada do computador é ${cartaComputador.texto} \nDeseja comprar mais uma carta?`)
         }


      

       const pontosUsuario = maoUsuario.valor
       const pontosComputador = cartaComputador.valor + cartaComputador2.valor
  
    
    
      //  console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${pontosUsuario}`)
      //  console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - pontuação ${pontosComputador}`)
    
      //  if (pontosUsuario > pontosComputador) {
      //     console.log("Parabéns, você venceu!")
      //  } else if (pontosUsuario === pontosComputador) {
      //     console.log("Que disputa incrível! Ocorreu um empate!")
      //  } else {
      //     console.log("Que pena, o computador venceu ):")
      //  }
    
    } if (confirmacao === 'cancel') {
       console.log("O jogo acabou")
    }