import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { MyButton } from '../../utils/MyButton';

export const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const percentage = () => {
    if (start < end) {
      setStart(prevCount => (prevCount += 1));
    }
  };

  // show discount from 0 to 30
  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(previousCount => (previousCount += 1));
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={inView => {
            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <MyButton
              text="Purchase tickets"
              size="medium"
              link="https://google.com"
              style={{ background: '#ffa800', color: '#ffffff' }}
              iconTicket
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};
