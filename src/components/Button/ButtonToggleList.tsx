import React, { useState } from 'react';
import Description from '../Description/Description';
import EquipementsList from '../EquipementsList/EquipementsList';
import { BtnList, Icon, ButtonLarge } from './ButtonToggleListStyles';

type ButtonProps = {
  buttonName: string,
  items: string | string[],
  isLarge: boolean
}

function ButtonToggleList({ buttonName, items, isLarge }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const typeData = typeof items === 'object' ? (
    <EquipementsList items={items} />
  ) : (
    <Description items={items} />
  );

  return (
    <BtnList isLarge={isLarge}>
      <ButtonLarge onClick={handleToggleClick}>
        {buttonName}
        <Icon
          isOpen={isOpen}
          src="/images/arrow-icon.svg"
          alt="arrow icon"
        />
      </ButtonLarge>
      {isOpen && typeData}
    </BtnList>
  );
}

export default ButtonToggleList;
