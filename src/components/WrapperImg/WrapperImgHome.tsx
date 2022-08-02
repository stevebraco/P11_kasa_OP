import React from 'react';
import {
  WrapperImage,
  WrapperImg,
  WrapperTitle,
} from './WrapperImgHomeStyles';

type AboutProps = {
  img: string,
  title: string | null
}

function WrapperImgHome({ img, title }: AboutProps) {
  return (
    <WrapperImg>
      <WrapperTitle>
        <h1>{title && title}</h1>
      </WrapperTitle>
      <WrapperImage
        className="wrapperImg__img"
        src={img}
        alt="paysage"
      />
    </WrapperImg>
  );
}

export default WrapperImgHome;
