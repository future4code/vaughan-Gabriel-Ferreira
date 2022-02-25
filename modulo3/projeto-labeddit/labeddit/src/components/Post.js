import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
  width: 30vw;
  margin: auto;
  margin-top: 4%;
`;
const PostHeader = styled.div`
  /* border: 1px solid black; */
  display:flex;
  align-items: center;
  height: 30px;
  padding-left: 4%;
  align-items: center;
  border-bottom: 2px solid black;
`;
const PostBody = styled.div`
  /* border: 1px solid black; */
  height: 150px;
  padding: 4%;
`;
const PostFooter = styled.div`
  border-top: 2px solid black;
  height: 30px;
  display:flex;
  justify-content: space-between;
  div{
    display:inline;
    margin-left: 4px;
  }
`;


const Post = (props) => {
  // const navigate = useNavigate()
  
  const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
  }

  const params = useParams()


  return (
    <div>      
      <PostContainer onClick={goToPostPage}>
        <PostHeader>{props.card.username}</PostHeader>
        <PostBody>{props.card.body}</PostBody>
        <PostFooter>
          <div>
            {props.card.voteSum}<div><button>↑</button> <button>↓</button></div>
          </div> 
          <button onClick={() => {console.log(params)}}> comentarios </button>
          </PostFooter>
      </PostContainer>
    </div>
  );
};

export default Post;
