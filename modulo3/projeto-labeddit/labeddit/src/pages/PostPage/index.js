import React, { useEffect, useState } from 'react'
import Post from '../../components/Post';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { CommentBox, CommentHeader, CommentBody } from './styled';

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
  const [comments, setComments] = useState([])

  const getPostComments = () => {
    axios.get(`${BASE_URL}/posts/${params.id}/comments`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      setComments(response.data)
      console.log(comments)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect (() => {
    getPostComments()
  }, [])

  console.log('comentários antes do map', comments)


  const commentSection = comments.map((comment) => {    
   return(
   <CommentBox>

   <CommentHeader>{comment.username}</CommentHeader>
   <CommentBody><p>{comment.body}</p></CommentBody>
   </CommentBox>
   )
  })

  console.log('seção de comentários', commentSection)

  return (
    <div>
      <Title>Comentários</Title>
      {commentSection}
    </div>
  );
}

export default PostPage;