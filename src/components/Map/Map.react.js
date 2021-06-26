import React from 'react';

export const Map = () => {
  return (
    <div className="location_wrapper">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9713.994604779791!2d13.443631561510122!3d52.50631428887055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18f908279305c532!2sMercedes-Benz%20Arena%20Berlin!5e0!3m2!1sen!2sde!4v1624724486092!5m2!1sen!2sde"
        width="100%"
        height="500px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};
