import { logDOM } from "@testing-library/react"
import { Circle, CircleContainer, Container, Footer, Header, HeaderContainer, Root } from "./Styled"
import { RoundedBorder } from "./Styled"
import megaLogo1 from "../../assets/megaLogo1.png"
import { useEffect, useState } from "react"
import axios from "axios"

export const MegaSenaPage = () => {
    const [lotto, setLotto] = useState([]);
    const [contest, setContest] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        getLottoInfo()
        getContestInfo()
        getMegaSenaInfo()
    }, [])

    const getLottoInfo = () => {
        axios
        .get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
        )
        .then((response) => {
            setLotto(response)
            console.log("loterias", response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getContestInfo = () => {
        axios.get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
        )
        .then((response) => {
            setContest(response.data[0].concursoId)
            console.log("concurso", response)
            console.log("ConcursoId", response.data[0].concursoId)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getMegaSenaInfo = () => {
        axios.get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359"
        )
        .then((response) => {
            setResult(response.data.numeros)
            console.log("RESULTADO", response)
            console.log("estado resultado:", result)
        })
        .catch((err) => {
            console.log(err)
        })
    }


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
                <p>Concurso Nº {contest}</p>
                </HeaderContainer>
           </Header>
           <RoundedBorder>

           </RoundedBorder>
           <Footer>
               
               <Container>
               <Circle>{result[0]}</Circle>
               <Circle>{result[1]}</Circle>
               <Circle>{result[2]}</Circle>
               <Circle>{result[3]}</Circle>
               </Container>

               <Container>
               <Circle>{result[4]}</Circle>
               <Circle>{result[5]}</Circle>
               </Container>

               <p> Este sorteio é meramente ilustrativo e não possui ligação alguma com a CAIXA.</p>

           </Footer>
        </Root>
    )
}