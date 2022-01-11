import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const TituloH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <AppContainer>
      <PageSectionContainer>
        <TituloH2>Dados pessoais</TituloH2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02MUTNFTJA-8051d1006134-512" 
          nome="Gabriel Ferreira" 
          descricao="Olá, meu nome é Gabriel e sou estudante da Labenu. Gosto de Literatura e atualmente tenho uma matrícula trancada no curso de Letras. A experiência profissional que já tive envolveu streaming, mas pretendo agora ocupar alguma vaga como dev."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          categoria = 'Endereço:'
          textoCategoria = 'Mundo'
        />

        <CardPequeno
          categoria = 'E-mail:'
          textoCategoria = 'vallefnd@gmail.com'
        />
      
      </PageSectionContainer>
      

      <PageSectionContainer>
        <TituloH2>Experiências profissionais</TituloH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TituloH2>Minhas redes sociais</TituloH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
