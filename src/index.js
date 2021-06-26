import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'resources/styles.css';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
