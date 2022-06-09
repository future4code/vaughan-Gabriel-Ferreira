import { BodyContainer, SearchBarContainer } from "./Style"

export const Body = () => {
    return(
        <BodyContainer>
            Pesquise sobre qualquer usuário do GitHub!
        <SearchBarContainer>
        <input/>
        <button>Search</button>
        </SearchBarContainer>
        </BodyContainer>
    )
}