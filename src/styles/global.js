import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: transparent;
  } 

  body {
    font-family: 'Roboto', sans-serif;
  }
`;
