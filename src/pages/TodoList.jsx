import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Form from '../components/Form';

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

const Layout = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: auto;
`;

export default TodoList;
