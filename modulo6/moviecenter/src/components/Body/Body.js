import axios from "axios"
import { useEffect, useState } from "react"
import { key } from "../../constants/key"
import { BodyContainer, MovieCard, MovieTitleContainer } from "./Style"




export const Body = () => {

    const [movies, setMovies] = useState([])
    const [images, setImages] = useState([])

    useEffect (() =>{
        console.log("montou")
        getMovies()
        getImages()
    }, [])

    const getImages = () => {
        axios
        .get(`https://api.themoviedb.org/3/movie/338953/images?api_key=${key}&language=en-US`)
        .then((response) => {
            console.log("AS IMAGENS: ", response)
            // setImages(response.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const getMovies = () => {
        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then((response) => {
            console.log("FUNCIONOU!!!!!!!!", response)
            setMovies(response.data.results)
            console.log("OLHA AQUI O DATA", response.data)
            console.log("OLHA AQUI OS FILMES:", movies)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const mappedMovies = movies.map((movie) => {
        return(
            <MovieCard>
            <img src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg"/>
            <MovieTitleContainer>
            {movie.title}
            </MovieTitleContainer>
            <div>
            Lançamento: {movie.release_date}
            </div>
            </MovieCard>
        )
    })

    return (
        <BodyContainer>
            {mappedMovies}
        </BodyContainer>
    )
}