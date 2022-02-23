import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  margin-top: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  padding-bottom: 0;
  input{
    margin: 1em;
  }
  button{
    padding: 0.2em;
    margin: 1em;
    width: 90px;
  }
`;

export const ButtonDiv = styled.div`
  display:flex;
  justify-content: center;
  text-align: center;
  button{
    padding: 0.2em;
    width: 90px;
  }
`