import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 44px;
  width: 100%;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  padding: 0 24px;

  &:hover {
    opacity: 1;
    background-color: #074983;
  }
`;
