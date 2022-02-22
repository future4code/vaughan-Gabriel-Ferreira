import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  width: 30vw;
  margin: auto;
  margin-top: 4%;
`;
const PostHeader = styled.div`
  border: 1px solid black;
  height: 30px;
`;
const PostBody = styled.div`
  border: 1px solid black;
  height: 300px;
`;
const PostFooter = styled.div`
  border: 1px solid black;
  height: 30px;
`;
const NewPost = styled.div`
  display: flex;
  margin: 2%;
  margin: auto;
  
  border: 1px solid black;
  height: 200px;
  width: 30vw;

`;

const Post = () => {
  return (
    <div>
      <NewPost/>
      <PostContainer>
        <PostHeader>USER</PostHeader>
        <PostBody>POST-BODY</PostBody>
        <PostFooter>POST-FOOTER</PostFooter>
      </PostContainer>
    </div>
  );
};

export default Post;
