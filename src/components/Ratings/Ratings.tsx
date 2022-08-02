import React from 'react';
import { Rating, RatingStar } from './RatingsStyles';

type RatingsProp = {
  rating: string,
}

function Ratings({ rating }: RatingsProp) {
  return (
    <Rating>
      <RatingStar>
        {parseFloat(rating) >= 1 ? (
          <img src="/images/stars-full.svg" alt="stars full" />
        ) : (
          <img src="/images/stars-empty.svg" alt="stars empty" />
        )}
      </RatingStar>
      <RatingStar>
        {parseFloat(rating) >= 2 ? (
          <img src="/images/stars-full.svg" alt="stars full" />
        ) : (
          <img src="/images/stars-empty.svg" alt="stars empty" />
        )}
      </RatingStar>
      <RatingStar>
        {parseFloat(rating) >= 3 ? (
          <img src="/images/stars-full.svg" alt="stars full" />
        ) : (
          <img src="/images/stars-empty.svg" alt="stars empty" />
        )}
      </RatingStar>
      <RatingStar>
        {parseFloat(rating) >= 4 ? (
          <img src="/images/stars-full.svg" alt="stars full" />
        ) : (
          <img src="/images/stars-empty.svg" alt="stars empty" />
        )}
      </RatingStar>
      <RatingStar>
        {parseFloat(rating) >= 5 ? (
          <img src="/images/stars-full.svg" alt="stars full" />
        ) : (
          <img src="/images/stars-empty.svg" alt="stars empty" />
        )}
      </RatingStar>
    </Rating>
  );
}

export default Ratings;
