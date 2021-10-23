import React from 'react';
import Icon from '../icon.jsx';
import { Container } from './style.js';

const SearchInput = () => {
  return (
    <Container>
      <input type='text' placeholder='Search' />
      <button>
        <Icon name='AiOutlineSearch' color='white' size={24} />
      </button>
    </Container>
  );
};

export default SearchInput;
