import React from 'react';
import { Container, Content, Dashboard, Header, Menu } from './styles';

function App() {
  return (
    <Container>
      <Menu>
        <div className='logo'></div>
      </Menu>
      <Dashboard>
        <Header />
        <Content />
      </Dashboard>
    </Container>
  );
}

export default App;
