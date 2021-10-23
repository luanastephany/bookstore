import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 440px;
  height: 44px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #eaeaea;

  input {
    padding: 0 24px;
    flex: 1;
    font-size: 18px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60px;
    background-color: #2f7ab6;
    cursor: pointer;

    &:active {
      background-color: #074983;
    }
  }
`;
