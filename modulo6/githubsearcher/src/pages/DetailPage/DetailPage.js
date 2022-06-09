import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailPageContainer, InfoContainer } from "./Style"

export const Detailpage = () => {

    const params = useParams()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [bio, setBio] = useState("")
  
    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = () => {
        axios.get(`https://api.github.com/users/${params.name}`)
        .then((response) => {
            console.log(response)
            setName(response.data.name)
            setUsername(response.data.login)
            setFollowers(response.data.followers)
            setFollowing(response.data.following)
            setImageLink(response.data.avatar_url)
            setBio(response.data.bio)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const navigate = useNavigate()

    return (
        <DetailPageContainer>
        <button onClick={() => {navigate("/")}}>Return</button>
        <img src={imageLink}/>
        
        <InfoContainer>
        <div>Nome: {name}</div>
        <div>Login: {username}</div>
        <div>Bio: {bio}</div>
        <div>Número de seguidores: {followers}</div>
        <div>Está seguindo: {following}</div>
        </InfoContainer>        
        </DetailPageContainer>
    )
}