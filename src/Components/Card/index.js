import React from 'react';
import {Container, Title} from './styles';

export default function Card({label}) {
  return (
    <Container>
      <Title>{label}</Title>
    </Container>
  );
}
