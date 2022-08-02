import React, { useState } from 'react';
import { Appartement } from '../../hooks/useFetch';
import ButtonToggleList from '../Button/ButtonToggleList';
import Host from '../Host/Host';
import Ratings from '../Ratings/Ratings';
import {
  DisplayNumber,
  AppartementContainerImg,
  AppartementIconBack,
  AppartementIconNext,
  AppartementImg,
  AppartementInfo,
  AppartementInfoRight,
  AppartementStyles,
  AppartementSubtitle,
  AppartementTitle,
  AppartementButton,
} from './AppartementStyles';
import Tags from '../Tags/Tags';

function AppartementDetails({
  title,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}: Appartement) {
  const [indexImg, setIndexImg] = useState(0);

  const locationCity = (nameLocation) => {
    const region = nameLocation?.split('-')[0];
    const splitCity = nameLocation?.split('-')[1];
    const city = splitCity?.split(' ')[1];

    return `${city}, ${region}`;
  };

  const handleNextImage = () => {
    setIndexImg(indexImg + 1);
    if (indexImg === pictures.length - 1) {
      setIndexImg(0);
    }
  };
  const handlePrevImage = () => {
    setIndexImg(indexImg - 1);
    if (indexImg < 1) {
      setIndexImg(pictures.length - 1);
    }
  };
  return (
    <AppartementStyles>
      <AppartementContainerImg>
        <AppartementIconBack onClick={handlePrevImage}>
          <img src="/images/arrow-back.svg" alt="précédente" />
        </AppartementIconBack>
        <AppartementIconNext onClick={handleNextImage}>
          <img src="/images/arrow-next.svg" alt="suivante" />
        </AppartementIconNext>
        <AppartementImg src={pictures[indexImg]} alt={title} />
        <DisplayNumber>
          {indexImg + 1}
          /
          {pictures.length}
        </DisplayNumber>
      </AppartementContainerImg>
      <AppartementInfo>
        <div className="Appartement__info-left">
          <AppartementTitle>{title}</AppartementTitle>
          <AppartementSubtitle>{locationCity(location)}</AppartementSubtitle>
          <Tags tags={tags} />
        </div>
        <AppartementInfoRight>
          <Host {...host} />
          <Ratings rating={rating} />
        </AppartementInfoRight>
      </AppartementInfo>
      <AppartementButton>
        <ButtonToggleList buttonName="Description" items={description} isLarge={false} />
        <ButtonToggleList buttonName="Équipements" items={equipments} isLarge={false} />
      </AppartementButton>
    </AppartementStyles>
  );
}

export default AppartementDetails;
