import React from 'react';
import styled from 'styled-components';

function Form() {
  return (
    <Container>
      <InputGrop>
        <label>제목</label>
        <input placeholder="제목을 입력하세요" type="text" />
        <label>내용</label>
        <input placeholder="내용을 일력하세요" type="text" />
      </InputGrop>

      <button>추가하기</button>
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
