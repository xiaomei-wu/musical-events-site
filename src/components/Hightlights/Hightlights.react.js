import React from 'react';
import { EventDateTime } from './EventDateTime';
import { Location } from './Location';
import { HighlightsWrapper } from './Hightlights.styled';

export const Highlights = () => {
  return (
    <HighlightsWrapper>
      <EventDateTime />
      {/* <h1>Second Box</h1> */}
      <Location />
    </HighlightsWrapper>
  );
};
