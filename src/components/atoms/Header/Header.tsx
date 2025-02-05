import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

const Header: React.FunctionComponent = ({ children }) => (
  <Container>{children}</Container>
);

export default Header;
