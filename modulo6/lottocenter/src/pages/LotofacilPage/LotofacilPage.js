import { logDOM } from "@testing-library/react"
import { Circle, CircleContainer, Container, Footer, Header, HeaderContainer, Root } from "./Styled"
import { RoundedBorder } from "./Styled"
import easyloto1 from "../../assets/easyloto1.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const LotofacilPage = () => {
    const [lotto, setLotto] = useState([]);
    const [contest, setContest] = useState([]);
    const [result, setResult] = useState([]);
    const [day, setDay] = useState([])
    const [month, setMonth] = useState([])
    const [year, setYear] = useState([])


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
        })
        .catch((err) => {
        })
    }

    const getContestInfo = () => {
        axios.get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
        )
        .then((response) => {
            setContest(response.data[2].concursoId)
        })
        .catch((err) => {
        })
    }

    const getResultInfo = () => {
        axios.get(
            "https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2200"
        )
        .then((response) => {
            setResult(response.data.numeros)
            setYear(response.data.data.slice(0, 4))
            setMonth(response.data.data.slice(5, 7))
            setDay(response.data.data.slice(8, 10))
        })
        .catch((err) => {
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
                    <option value={"/lotofacil"}>LOTOFÁCIL</option>
                    <option value={"/"}>MEGA-SENA</option>
                    <option value={"/diadesorte"}>DIA DE SORTE</option>
                    <option value={"/lotomania"}>LOTOMANIA</option>
                    <option value={"/quina"}>QUINA</option>
                    <option value={"/timemania"}>TIMEMANIA</option>
                </select>
                <img src={easyloto1}/>
                <h2>LOTOFACIL</h2>
                <p>Concurso Nº {contest}</p>
                <p>{day}/{month}/{year}</p>

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