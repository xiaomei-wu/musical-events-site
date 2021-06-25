import React, { useState, useEffect } from 'react';

import { HeaderWrapper, Title, TitleWrapper } from './Header.styled';
import { SideDrawer } from './SideDrawer';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper
      style={{
        backgroundColor: showHeader ? '#2f2f2f' : 'transparent',
      }}
    >
      <TitleWrapper>
        <Title>The Venue</Title>
        <span>MUSICAL EVENTS</span>
      </TitleWrapper>
      <SideDrawer />
    </HeaderWrapper>
  );
};
