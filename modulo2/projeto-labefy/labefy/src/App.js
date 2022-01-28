import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CardPlaylist = styled.div`
  margin: 10px;
  padding: 10px;
  color: darkblue;
  background-color: lightskyblue;
  border-radius: 10px;
  border: 1px solid darkblue;
  display: flex;
  justify-content: space-between;
`

export default class App extends React.Component{
  state = {
    playlistName : "",
    AllPlaylists: []
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  insertName = (event) => {    
    this.setState({playlistName: event.target.value})
  }

  createPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {name: this.state.playlistName}
    const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}

    axios.post(url, body, header)
    .then(() => {
      alert("Playlist criada com sucesso")
      this.setState({playlistName: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  getAllPlaylists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}
    axios.get(url, header)
    .then((res) => {
      this.setState({AllPlaylists: res.data.result.list})
    })
    .catch((err) => {
      alert("Ocorreu um erro")
    })
  }

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
    const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}

    axios.delete(url, header)
    .then(() => {
      alert("Sua playlist foi duramente deletada")
      this.getAllPlaylists()
    })  
    .catch(() => {
      alert("Deu problema D:")
    })
  }

  render (){

    const playlists = this.state.AllPlaylists.map((pl)=> {
      return (
        <CardPlaylist key={pl.id}>
          {pl.name}
          <button onClick={this.deletePlaylist}>X</button>
        </CardPlaylist>)
    })
    console.log(this.state.AllPlaylists)

    return (
      <div>
        <h1>Crie sua Playlist</h1>
        <div>
          <input
            placeholder='Nome da Playlist'
            onChange={this.insertName}
            value={this.state.playlistName}
          />
          <button onClick={this.createPlaylist}>Add Playlist</button>
        </div>
        <br/>
        {playlists}
      </div>
    )
  }
}
