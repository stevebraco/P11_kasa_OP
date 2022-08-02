import React from 'react';
import Equipement from '../Equipement/Equipement';
import { WrapperButton } from '../../styles/GlobalStyles';

function EquipementsList({ items }: any) {
  return (
    <WrapperButton>
      {items.map((item) => (
        <Equipement key={item.toString()} item={item} />
      ))}
    </WrapperButton>
  );
}

export default EquipementsList;
