import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToDetailPage } from "../routes/coordinator"
import { BodyContainer, SearchBarContainer } from "./Style"

export const Body = () => {

    const navigate = useNavigate()
    const [inputText, setInputText] = useState("")

    return(
        <BodyContainer>
            Pesquise sobre qualquer usuário do GitHub!
        <SearchBarContainer>
        <input
        value={inputText}
        onChange={e => {setInputText(e.target.value)}}
        />

        <button onClick={() => {navigate(`/user/${inputText}`)}}>Search</button>
        </SearchBarContainer>
        </BodyContainer>
    )
}