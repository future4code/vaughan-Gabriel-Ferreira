import axios from "axios";
import React, { useEffect, useState } from "react";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
import styled from "styled-components";
import Post from '../../components/Post';
import { Title, NewPost } from "./styled";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  const navigate = useNavigate
  const [posts, setPosts] = useState([])
  
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

  const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
  }

  const onClickCard = (id) => {
    console.log('clicou!!!!')
    goToPostPage(navigate, id)
  }
  

  const cardPosts = posts.map((post) => {
    return (
    <Post 
      key={post.id}
      card={post}
      onClick={() => {onClickCard(post.id)}}
    />)
  })

  return (
    <div>
      <Title>Feed</Title>
      <NewPost/>
      {cardPosts}
    </div>
  );
};

export default FeedPage;