import React from 'react';

import IconLocation from 'resources/images/icons/location.png';
import { Zoom } from 'react-awesome-reveal';
import {
  Title,
  Description,
  IconWrapper,
  VenueNfoInner,
  VenueNfoOuter,
} from './Location.styled';

export const Location = () => {
  return (
    <Zoom delay={500} className="vn_item">
      <div>
        <VenueNfoOuter>
          <VenueNfoInner>
            <div className="vn_icon_square bck_yellow" />
            <IconWrapper style={{ background: `url(${IconLocation})` }} />
            <Title>Event Location</Title>
            <Description>375 Deer Oak, Oakland, CA 935</Description>
          </VenueNfoInner>
        </VenueNfoOuter>
      </div>
    </Zoom>
  );
};
