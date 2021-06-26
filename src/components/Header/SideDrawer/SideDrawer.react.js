import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Drawer, Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import { SideDrawerWrapper } from './SideDrawer.styled';

export const SideDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const links = [
    { where: 'featured', value: 'To top' },
    { where: 'venuenfo', value: 'Venue NFO' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' },
  ];

  // eslint-disable-next-line no-unused-vars
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    onClose();
  };

  const renderItem = item => {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <p onClick={() => alert(item.where)} key={item.where}>
        {item.value}
      </p>
    );
  };

  return (
    <SideDrawerWrapper>
      <Button type="text" onClick={showDrawer} style={{ padding: '20px' }}>
        <MenuUnfoldOutlined style={{ fontSize: '32px', color: 'white' }} />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {links.map(item => renderItem(item))}
      </Drawer>
    </SideDrawerWrapper>
  );
};
