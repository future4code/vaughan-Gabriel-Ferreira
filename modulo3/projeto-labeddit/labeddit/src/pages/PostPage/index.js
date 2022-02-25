import React, { useEffect, useState } from 'react'
import Post from '../../components/Post';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const PostPage = (props) => {
  const params = useParams()
  console.log(params)
  const [post, setPost] = useState()

  useEffect (() => {

  }, [])

  return (
    <div>
      <Title>Post</Title>
      {/* <Post/> */}
    </div>
  );
}

export default PostPage;