import React from 'react';
import styled from 'styled-components';

function Card({ todos }) {
  return (
    <TodoCard>
      <h2>{todos[0].title}</h2>
      <p>{todos[0].body}</p>
      <ButtonGrop>
        <button>삭제</button>
        <button>완료</button>
      </ButtonGrop>
    </TodoCard>
  );
}
const TodoCard = styled.div`
  border: 4px solid #f5d08a;
  width: 270px;
  border-radius: 10px;
  padding: 12px 24px 24px 24px;
`;
const ButtonGrop = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  button {
    border: none;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Card;
