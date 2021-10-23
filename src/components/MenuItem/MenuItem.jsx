import React from 'react';
import Icon from '../icon';
import { Container } from './style.js';

const MenuItem = ({ icon, label }) => {
  return (
    <Container>
      <Icon name={icon} size={24} />
      <span>{label}</span>
    </Container>
  );
};

export default MenuItem;
