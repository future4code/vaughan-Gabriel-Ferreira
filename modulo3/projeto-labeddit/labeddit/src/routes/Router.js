import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import FeedPage from '../pages/FeedPage';
import PostPage from '../pages/PostPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginPage/>} />
        <Route path = "/cadastro" element = {<RegisterPage/>} />
        <Route path = "/feed" element = {<FeedPage/>} />
        <Route path = "/post/:id" element = {<PostPage/>} />     
      </Routes>
    </BrowserRouter>
  );
}

export default Router;