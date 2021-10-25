import React from 'react';
import Icon from '../icon';
import { Container } from './style.js';

const MenuItem = ({ icon, label, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon name={icon} size={24} />
      <span>{label}</span>
    </Container>
  );
};

export default MenuItem;
