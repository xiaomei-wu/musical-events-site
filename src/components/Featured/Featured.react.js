import React from 'react';

import { Carrousel } from './Carrousel';
import { ArtistName } from './ArtistName';
import { CountDown } from './CountDown';

import { FeaturedWrapper } from './Featured.styled';

export const Featured = () => {
  return (
    <FeaturedWrapper>
      <Carrousel />
      <ArtistName />
      <CountDown />
    </FeaturedWrapper>
  );
};
