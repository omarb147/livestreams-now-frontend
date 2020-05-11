import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/module/store';

import { createGlobalStyle } from 'styled-components';
import App from './router';

const GlobalStyle = createGlobalStyle`
  body {
  height:100%;
  width:auto;
  margin: 0;
  position:relative;
  font-family: 'Roboto';
  font-weight: 400;
  display:block;
  }
  h1, h2,h3{
  font-weight: 300;

  }
  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector('#root'),
);
