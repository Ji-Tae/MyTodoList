import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <div>MyTodoList</div>
      <div>React</div>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f5d08a;
  border-radius: 10px;
  display: flex;
  font-size: 20px;
`;
export default Header;
