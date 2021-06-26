import React from 'react';
import { MyButton } from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';

export const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nes.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora laborevoluptatem.',
    ],
    linkto: ['https://sales.b', 'https://sales.m', 'https://sales.s'],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={priceState.prices[index]}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              size="medium"
              style={{ color: '#ffffff' }}
              link={priceState.linkto[index]}
              iconTicket
            />
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};
