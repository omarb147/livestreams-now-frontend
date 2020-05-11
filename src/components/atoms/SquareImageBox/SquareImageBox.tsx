import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 10rem;
`;
const Image = styled.div`
  background-color: red;
  width: 90%;
  height: 90%;
  border-radius: 20%;
`;
const TextContainer = styled.div`
  padding-top: 0.5rem;
`;

const SquareSelectBox = () => (
  <Container>
    <Image />
    <TextContainer>Drake Livestream</TextContainer>
  </Container>
);

export default SquareSelectBox;
