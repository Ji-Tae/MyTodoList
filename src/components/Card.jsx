import React from 'react';
import styled from 'styled-components';

function Card({ todos, el, setTodos }) {
  const deleteButton = (todoId) => {
    const newTodos = todos.filter((el) => {
      return todoId !== el.id;
    });
    setTodos(newTodos);
  };
  const ChangeIsDone = (todoId) => {
    const newTodos = todos.map((el) => {
      if (el.id === todoId) {
        return { ...el, isDone: !el.isDone };
      } else {
        return el;
      }
    });
    setTodos(newTodos);
  };
  return (
    <TodoCard key={el.id}>
      <h2>{el.title}</h2>
      <p>{el.body}</p>
      <ButtonGrop>
        <button onClick={() => deleteButton(el.id)}>삭제</button>
        <button onClick={() => ChangeIsDone(el.id)}>
          {!el.isDone ? '완료' : '취소'}
        </button>
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
