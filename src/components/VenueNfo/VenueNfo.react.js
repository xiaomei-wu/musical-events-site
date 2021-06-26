import React from 'react';

import { EventDateTime } from './EventDateTime';
import { Location } from './Location';
import { VenueNfoWrapper } from './VenueNfo.styled';

export const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center-wrapper">
        <VenueNfoWrapper>
          <EventDateTime />
          <Location />
        </VenueNfoWrapper>
      </div>
    </div>
  );
};
