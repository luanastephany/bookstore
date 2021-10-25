import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Container } from './styles';

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div>
      <Container>
        <img src={`http://localhost:1337${book.cover.url}`} alt={book.title} />
        <h3>{book.title}</h3>
        <span className='author'>{book?.author?.name}</span>
        <ReactStars
          count={5}
          size={24}
          activeColor='#f4b75b'
          value={book.rating}
          edit={false}
        />
        <span className='price'>
          {book.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </Container>
    </div>
  );
};

export default BookCard;
