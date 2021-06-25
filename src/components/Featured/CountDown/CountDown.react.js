import React, { useState, useCallback, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';

import {
  CountDownWrapper,
  CountDownTop,
  CountDownBottom,
  CountDownItem,
  CountDownTime,
  CountDownTag,
} from './CountDown.styled';

export const CountDown = () => {
  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const renderTime = (time, value) => (
    <CountDownItem>
      <CountDownTime>{time}</CountDownTime>
      <CountDownTag>{value}</CountDownTag>
    </CountDownItem>
  );

  const getTimeUntil = useCallback(deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil('Dec, 20, 2021, 01:20:00'), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <CountDownWrapper>
        <CountDownTop>Event starts in</CountDownTop>
        <CountDownBottom>
          {renderTime(time.days, 'Days')}
          {renderTime(time.hours, 'HS')}
          {renderTime(time.minutes, 'Min')}
          {renderTime(time.seconds, 'Sec')}
        </CountDownBottom>
      </CountDownWrapper>
    </Slide>
  );
};
