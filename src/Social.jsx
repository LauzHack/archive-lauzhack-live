import React from 'react';
import Iframe from 'react-iframe';

import config from './config.json';


const Social = () => (
  <Iframe
    url={config.WALLSIO_URL}
    width="100%"
    height="1440px"
    id="myId"
    display="initial"
    position="relative"
    allowFullScreen
  />
);

export default Social;
