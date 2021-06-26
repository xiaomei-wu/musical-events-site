import React from 'react';
import { Button } from 'antd';

import TicketIcon from 'resources/images/icons/ticket.png';

export const MyButton = ({ text, link, size, style, iconTicket }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size={size || 'large'}
      style={{
        background: '#8e8e8e',
        color: '#ffffff',
        border: 'none',
        ...style,
      }}
    >
      {iconTicket ? (
        <img src={TicketIcon} className="iconImage" alt="iconButton" />
      ) : null}
      {text}
    </Button>
  );
};
