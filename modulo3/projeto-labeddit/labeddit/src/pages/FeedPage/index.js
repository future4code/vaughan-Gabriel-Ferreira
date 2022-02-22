import React from "react";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
import styled from "styled-components";
import Post from '../../components/Post';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const FeedPage = () => {
  return (
    <div>
      <Title>Feed</Title>
      <Post/>
    </div>
  );
};

export default FeedPage;