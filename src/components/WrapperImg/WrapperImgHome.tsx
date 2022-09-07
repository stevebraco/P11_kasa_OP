import React from 'react';
import {
  WrapperImage,
  WrapperImg,
  WrapperTitle,
} from './WrapperImgHomeStyles';

type WrapperImgProps = {
  img: string,
  title: string | null
}

function WrapperImgHome({ img, title }: WrapperImgProps) {
  return (
    <WrapperImg>
      <WrapperTitle>
        <h1>{title}</h1>
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
