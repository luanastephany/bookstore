import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from './components/BookCard';
import MenuItem from './components/MenuItem/MenuItem';
import SearchInput from './components/SearchInput/SearchInput';
import { Container, Content, Dashboard, Header, Menu } from './styles';

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadBooks = async () => {
    const response = await axios.get('http://localhost:1337/books');
    console.log(response);
    setBooks(response.data);
  };

  const loadCategories = async () => {
    const response = await axios.get('http://localhost:1337/categories');
    console.log(response);
    setCategories(response.data);
  };

  useEffect(() => {
    loadBooks();
    loadCategories();
  }, []);

  return (
    <Container>
      <Menu>
        <div className='logo'>
          <img src='/img/logo.svg' alt='' />
        </div>
        <div className='categories'>
          <h2>Categories</h2>
          <MenuItem icon='FaStar' label='All' onClick={() => loadBooks()} />
          {categories.map((item) => (
            <MenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => setBooks(item.books)}
            />
          ))}
        </div>
      </Menu>
      <Dashboard>
        <Header>
          <SearchInput />
        </Header>
        <Content>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Content>
      </Dashboard>
    </Container>
  );
}

export default App;
