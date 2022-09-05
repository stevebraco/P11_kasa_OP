import React from 'react';
import ButtonToggleList from '../Button/ButtonToggleList';
import Host from '../Host/Host';
import Ratings from '../Ratings/Ratings';
import {
  AppartementInfo,
  AppartementInfoRight,
  AppartementStyles,
  AppartementSubtitle,
  AppartementTitle,
  AppartementButton,
} from './AppartementStyles';
import Tags from '../Tags/Tags';
import Gallery from '../Gallery/Gallery';
import Appartement from '../../types/Appartement';

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
  const locationCity = (nameLocation) => {
    const region = nameLocation?.split('-')[0];
    const splitCity = nameLocation?.split('-')[1];
    const city = splitCity?.split(' ')[1];

    return `${city}, ${region}`;
  };

  return (
    <AppartementStyles>
      <Gallery pictures={pictures} title={title} />
      <AppartementInfo>
        <div>
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
