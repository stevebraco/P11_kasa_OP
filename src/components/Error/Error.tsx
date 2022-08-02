import React from 'react';
import {
  ErrorStyles,
  ErrorLink,
  ErrorNumber,
  ErrorText,
  ErrorWrapper,
} from './ErrorStyles';

function Error() {
  return (
    <ErrorStyles>
      <ErrorWrapper>
        <ErrorNumber>404</ErrorNumber>
        <ErrorText>
          Oups! La page que vous demandez n&apos;existe pas.
        </ErrorText>
      </ErrorWrapper>
      <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
    </ErrorStyles>
  );
}

export default Error;
