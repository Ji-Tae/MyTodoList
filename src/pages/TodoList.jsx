import styled from 'styled-components';
import Header from '../components/Header';
import Form from '../components/Form';

function TodoList() {
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
  margin: auto;
`;

export default TodoList;
