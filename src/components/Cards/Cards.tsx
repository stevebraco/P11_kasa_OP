import React from 'react';
import { Appartement } from '../../hooks/useFetch';
import Card from '../Card/Card';
import CardsStyles from './CardsStyles';

type CardsProp = {
  appartements: Appartement[],
}

function Cards({ appartements }: CardsProp) {
  return (
    <CardsStyles>
      {appartements?.map((appartement) => (
        <Card key={appartement.id} appartement={appartement} />
      ))}
    </CardsStyles>
  );
}

export default Cards;
