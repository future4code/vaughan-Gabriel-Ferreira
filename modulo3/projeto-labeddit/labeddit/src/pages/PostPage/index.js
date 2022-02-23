import React from 'react'
import Post from '../../components/Post';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const PostPage = () => {
  return (
    <div>
      <Title>Post</Title>
      <Post/>
    </div>
  );
}

export default PostPage;