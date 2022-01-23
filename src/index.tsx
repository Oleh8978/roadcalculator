import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

// app config
import { Config } from './config/api';

// store 
import store from './stote';

import reportWebVitals from './reportWebVitals';

// SCSS
import './assets/scss/main.scss';

Config.init({
    GOOGLE_API_SERVICE_HOST: process.env.REACT_APP_GOOGLE_MAPS_HOST || '',
    GOOGLE_API_SERVICE_PATH: process.env.REACT_APP_GOOGLE_MAPS_PATH || '',
    GOOGLE_API_SERVICE_PATH_LNG_LAT: process.env.REACT_APP_GOOGLE_MAPS_PATH_LNG || '',
    OSRM_API_PATH: process.env.REACT_APP_OSRM_PATH || '',
    GOOGLE_GEO_API_KEY: process.env.REACT_APP_GEO_KEY || '',
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
