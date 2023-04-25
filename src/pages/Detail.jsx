import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from './TodoList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos);

  const foundCard = todos.find((card) => card.id === params.id);
  const goBack = () => {
    navigate(-1);
  };
  console.log(foundCard);
  return (
    <Layout>
      <DetailBox>
        <DetailHeader>
          id:{foundCard.id}
          <button onClick={goBack}>이전으로</button>
        </DetailHeader>

        <h2>{foundCard.title}</h2>
        <p>{foundCard.body}</p>
      </DetailBox>
    </Layout>
  );
}
const DetailBox = styled.div`
  width: 500px;
  height: 300px;

  border: 1px solid gray;
  border-radius: 12px;

  margin: auto;
  margin-top: 20%;

  padding: 30px;
  h2 {
    margin-top: 50px;
  }
`;
const DetailHeader = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: 1px solid gray;
    height: 50px;
    width: 150px;
    background-color: aliceblue;
    border-radius: 20px;
    cursor: pointer;
  }
`;
export default Detail;
