import { logDOM } from "@testing-library/react"
import { Footer, Header, HeaderContainer, Root } from "./Styled"
import { RoundedBorder } from "./Styled"
import megaLogo1 from "../../assets/megaLogo1.png"

export const MegaSenaPage = () => {
    return(
        <Root>
            <Header>

                <HeaderContainer>
                <select>
                    <option>MEGA-SENA</option>
                    <option>DIA DE SORTE</option>
                    <option>LOTOFÁCIL</option>
                    <option>LOTOMANIA</option>
                    <option>QUINA</option>
                    <option>TIMEMANIA</option>
                </select>
                <img src={megaLogo1}/>
                <h2>MEGA-SENA</h2>
                <p>Concurso Nº</p>
                </HeaderContainer>
           </Header>
           <RoundedBorder>

           </RoundedBorder>
           <Footer>
               FOOTER
           </Footer>
        </Root>
    )
}