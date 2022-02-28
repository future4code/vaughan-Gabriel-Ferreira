import axios from "axios";
import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
import styled from "styled-components";
import Post from '../../components/Post';
import { Title, NewPost, NewPostButton } from "./styled";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  const navigate = useNavigate
  const [posts, setPosts] = useState([])
  const [newPostText, setNewPostText] = useState("")
  
  useEffect (() => {
    console.log('montou')
    getPosts()
  }, []) 

  const getPosts = () => {
    axios
    .get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log('foi!', response.data)
      setPosts(response.data)
      console.log(posts)
    })
    .catch((err) => {
      console.log(err)
    })    
  }

  const onChangeNewPostText = (event) => {
    setNewPostText(event.target.value)
  }

  const cardPosts = posts.map((post) => {
    return (
    <Link to={`/post/${post.id}`}>
    <Post 
      key={post.id}
      card={post}
    />
    </Link>)
  })

  return (
    <div>
      <Title>Feed</Title>
      <NewPost 
      placeholder="No que você está pensando?"
      onChange={onChangeNewPostText}
      value={newPostText}
      type="text"
      />
      <NewPostButton>Enviar</NewPostButton>
      {cardPosts}
    </div>
  );
};

export default FeedPage;