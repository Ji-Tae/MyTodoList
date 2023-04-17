import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Form from '../components/Form';

function TodoList() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부하자',
      isDone: false,
    },
    {
      id: 2,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부하자',
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form />
    </Layout>
  );
}

const Layout = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default TodoList;
