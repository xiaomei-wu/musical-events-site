import React from 'react';
import {
  Title,
  Subtitle,
  Date,
  Time,
  EventDateTimeWrapper,
} from './Location.styled';

export const Location = () => {
  return (
    <EventDateTimeWrapper>
      <Title>EventDateTime</Title>
      <Subtitle>Event Date & Time</Subtitle>
      <Date>Dec 20</Date>
      <Time>@01:20:00pm</Time>
    </EventDateTimeWrapper>
  );
};
