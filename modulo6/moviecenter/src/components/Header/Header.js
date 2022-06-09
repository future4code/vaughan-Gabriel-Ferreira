import { useState } from "react"
import { HeaderContainer } from "./Style"

export const Header = () => {

    const [searchText, setSearchText] = useState("")
    
    return(
        <HeaderContainer>
            TMDB 
            <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            />
        </HeaderContainer>
    )
}