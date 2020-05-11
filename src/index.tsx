import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/module/store';

import styled, { createGlobalStyle } from 'styled-components';
import App from './router';

const GlobalStyle = createGlobalStyle`
  body {
  height:100%;
  margin: 0;
  position:relative;
  font-family: 'Quicksand';
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </Provider>,
  document.querySelector('#root'),
);
