import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Container } from './styles';

const BookCard = ({ data }) => {
  return (
    <div>
      <Container>
        <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
        <span className='author'>{data.author}</span>
        <ReactStars
          count={5}
          size={24}
          activeColor='#f4b75b'
          value={4}
          edit={false}
        />
        <span className='price'>{data.price}</span>
      </Container>
    </div>
  );
};

export default BookCard;
