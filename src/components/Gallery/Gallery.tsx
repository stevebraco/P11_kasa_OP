import React, { useState } from 'react';
import {
  AppartementContainerImg,
  AppartementIconBack,
  AppartementIconNext,
  AppartementImg,
  DisplayNumber,
} from '../Appartement/AppartementStyles';

type GalleryProp = {
  pictures: string[],
  title: string
}

function Gallery({ pictures, title }: GalleryProp) {
  const [indexImg, setIndexImg] = useState(0);

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
    <AppartementContainerImg>
      {pictures.length !== 1 && (
        <>
          <AppartementIconBack onClick={handlePrevImage}>
            <img src="/images/arrow-back.svg" alt="précédente" />
          </AppartementIconBack>
          <AppartementIconNext onClick={handleNextImage}>
            <img src="/images/arrow-next.svg" alt="suivante" />
          </AppartementIconNext>
        </>
      )}
      <AppartementImg src={pictures[indexImg]} alt={title} />
      <DisplayNumber>
        {indexImg + 1}
        /
        {pictures.length}
      </DisplayNumber>
    </AppartementContainerImg>
  );
}

export default Gallery;
