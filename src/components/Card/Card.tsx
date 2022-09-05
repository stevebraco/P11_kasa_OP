import React from 'react';
import { Link } from 'react-router-dom';
import Appartement from '../../types/Appartement';
import {
  CardFigcaption,
  CardFigure,
  CardImg,
  CardStyles,
} from './CardStyles';

type CardProp = {
  appartement: Appartement,
}

function Card({ appartement }: CardProp) {
  const { id, cover, title } = appartement;
  return (
    <Link to={`/${id}`}>
      <CardStyles>
        <CardFigure>
          <CardImg src={cover} alt={title} />
          <CardFigcaption>{title}</CardFigcaption>
        </CardFigure>
      </CardStyles>
    </Link>
  );
}

export default Card;
