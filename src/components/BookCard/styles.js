import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    color: #505050;
    font-size: 18px;
    margin-top: 8px;
  }

  .author {
    color: #858585;
    font-weight: bold;
    font-size: 14px;
    margin: 5px 0;
  }

  .price {
    color: #858585;
    margin-top: 8px;
    font-weight: bold;
    font-size: 18px;
  }
`;
