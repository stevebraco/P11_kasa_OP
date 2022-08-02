import React from 'react';
import { WrapperButton } from '../../styles/GlobalStyles';

type ItemsProps = {
  items: string
}

function Description({ items }: ItemsProps) {
  return (
    <WrapperButton>
      <p>{items}</p>
    </WrapperButton>
  );
}

export default Description;
