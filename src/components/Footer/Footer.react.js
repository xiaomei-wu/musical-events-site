import React from 'react';
import { Fade } from 'react-awesome-reveal';

export const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue 2021 all rights reserved
        </div>
      </Fade>
    </footer>
  );
};
