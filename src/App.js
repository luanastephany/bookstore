import React from 'react';
import BookCard from './components/BookCard';
import MenuItem from './components/MenuItem/MenuItem';
import { Container, Content, Dashboard, Header, Menu } from './styles';

const data = {
  cover: '',
  title: '',
  author: '',
  price: '$10.00',
};

function App() {
  return (
    <Container>
      <Menu>
        <div className='logo'>
          <img src='/img/logo.svg' alt='' />
        </div>
        <div className='categories'>
          <h2>Categories</h2>
          <MenuItem icon='AiFillHeart' label='Romance' />
          <MenuItem icon='FaLaughSquint' label='Comedy' />
          <MenuItem icon='GiPumpkinMask' label='Horror' />
          <MenuItem icon='FaSketch' label='Finanças' />
        </div>
      </Menu>
      <Dashboard>
        <Header />
        <Content>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <BookCard key={index} data={data} />
            ))}
        </Content>
      </Dashboard>
    </Container>
  );
}

export default App;
