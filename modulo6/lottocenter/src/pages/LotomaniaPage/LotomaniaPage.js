import { logDOM } from "@testing-library/react"
import { Circle, CircleContainer, Container, Footer, Header, HeaderContainer, Root } from "./Styled"
import { RoundedBorder } from "./Styled"
import lotomania1 from "../../assets/lotomania1.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const LotomaniaPage = () => {
    const [lotto, setLotto] = useState([]);
    const [contest, setContest] = useState([]);
    const [result, setResult] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getLottoInfo()
        getContestInfo()
        getResultInfo()
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
            setContest(response.data[3].concursoId)
            console.log("concurso", response)
            console.log("ConcursoId", response.data[3].concursoId)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getResultInfo = () => {
        axios.get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2167"
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


    const handleChange = (value) => {
        navigate(`${value}`)
    }
    
    return(
        <Root>
            <Header>

                <HeaderContainer>
                <select onChange={event => handleChange(event.target.value)} >
                    <option value={"/lotomania"}>LOTOMANIA</option>
                    <option value={"/"}>MEGA-SENA</option>
                    <option value={"/diadesorte"}>DIA DE SORTE</option>
                    <option value={"/lotofacil"}>LOTOFÁCIL</option>
                    <option value={"/quina"}>QUINA</option>
                    <option value={"/timemania"}>TIMEMANIA</option>
                </select>
                <img src={lotomania1}/>
                <h2>LOTOMANIA</h2>
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