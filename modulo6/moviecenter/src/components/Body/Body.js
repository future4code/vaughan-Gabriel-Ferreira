import axios from "axios"
import { useEffect, useState } from "react"
import { key } from "../../constants/key"
import { BodyContainer } from "./Style"




export const Body = () => {

    const [movies, setMovies] = useState([])

    useEffect (() =>{
        console.log("montou")
        getMovies()
    }, [])
    
    const getMovies = () => {
        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then((response) => {
            console.log("FUNCIONOU!!!!!!!!", response)
            setMovies(response.data.results)
            console.log("OLHA AQUI OS FILMES:", movies)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <BodyContainer>
            CORPA1
        </BodyContainer>
    )
}