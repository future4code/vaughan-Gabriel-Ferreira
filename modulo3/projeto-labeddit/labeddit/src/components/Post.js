import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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
  display:flex;
  align-items: center;
  height: 30px;
  padding-left: 4%;
  align-items: center;
  border-bottom: 2px solid black;
`;
const PostBody = styled.div`
  height: 150px;
  padding: 4%;
`;
const PostFooter = styled.div`
  border-top: 2px solid black;
  height: 30px;
  display:flex;
  justify-content: space-around;
  div{
    display:inline;
    margin-left: 4px;
  }
`;


const Post = (props) => {

  
  


  return (
    <div>      
      <PostContainer>
        <PostHeader>{props.card.username}</PostHeader>
        <PostBody>{props.card.body}</PostBody>
        <PostFooter>
          <div>
            {props.card.voteSum}<div><button>↑</button> <button>↓</button></div>
          </div> 
          <div> clique para ler os comentários </div>
          </PostFooter>
      </PostContainer>
    </div>
  );
};

export default Post;
