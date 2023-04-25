import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';

function Card({ el }) {
  const dispatch = useDispatch();
  const deleteButton = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  const ChangeIsDone = (todoId) => {
    dispatch(toggleStatusTodo(todoId));
  };
  return (
    <TodoCard key={el.id}>
      <Link to={`/detail/${el.id}`}>상세페이지</Link>
      <h2>{el.title}</h2>
      <p>{el.body}</p>
      <ButtonGrop>
        <button onClick={() => deleteButton(el.id)}>삭제</button>
        <button onClick={() => ChangeIsDone(el.id)}>{!el.isDone ? '완료' : '취소'}</button>
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
