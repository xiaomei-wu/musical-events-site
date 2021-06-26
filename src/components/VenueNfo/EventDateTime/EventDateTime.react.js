import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import IconCalender from 'resources/images/icons/calendar.png';
import {
  Title,
  IconWrapper,
  VenueNfoOuter,
  VenueNfoInner,
  Description
} from './EventDateTime.styled';

export const EventDateTime = () => {
  return (
    <Zoom triggerOnce className="vn_item">
      <div>
        <VenueNfoOuter>
          <VenueNfoInner>
            <div className="vn_icon_square bck_red" />
            <IconWrapper style={{ background: `url(${IconCalender})` }} />
            <Title>Event Date & Time</Title>
            <Description>Dec 20 @ 01:20:00 pm</Description>
          </VenueNfoInner>
        </VenueNfoOuter>
      </div>
    </Zoom>
  );
};
