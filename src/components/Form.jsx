import React, { useState } from 'react';
import styled from 'styled-components';

function Form({ todos, setTodos }) {
  const initialState = {
    id: 0,
    title: '',
    body: '',
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHendler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const addCardHendler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      body: todo.body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <Container>
      <InputGrop>
        <label>제목</label>
        <input
          name="title"
          defaultValue={todo.title}
          onChange={onChangeHendler}
          placeholder="제목을 입력하세요"
          type="text"
        />
        <label>내용</label>
        <input
          name="body"
          defaultValue={todo.body}
          onChange={onChangeHendler}
          placeholder="내용을 입력하세요"
          type="text"
        />
      </InputGrop>

      <button onClick={addCardHendler}>추가하기</button>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #f5d08a;
  border-radius: 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5d08a;
  button {
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    font-weight: 700;
    color: #787878;
    &:hover {
      background-color: #dcdcdc;
      color: #f5d08a;
    }
  }
`;

const InputGrop = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  label {
    font-weight: 700;
  }
  input {
    height: 40px;
    width: 400px;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
  }
`;
export default Form;
