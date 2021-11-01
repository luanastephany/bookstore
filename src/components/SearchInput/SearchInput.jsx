import React, { useState } from 'react';
import Icon from '../icon.jsx';
import { Container } from './style.js';

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState(null);
  return (
    <Container>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Search'
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            onSearch(value);
          }
        }}
      />
      <button onClick={() => onSearch(value)}>
        <Icon name='AiOutlineSearch' color='white' size={24} />
      </button>
    </Container>
  );
};

export default SearchInput;
