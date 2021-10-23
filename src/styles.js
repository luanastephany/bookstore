import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: #01579b;

  .logo {
    display: flex;
    padding: 0 24px;
    width: 100%;
    height: 90px;
    background-color: #004983;
  }

  .categories {
    color: #fff;

    h2 {
      margin: 24px;
    }
  }
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  background-color: #ecf6ff;
`;

export const Header = styled.header`
  height: 90px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 24px;
  width: 100%;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
`;
