import React from 'react';
import styled from 'styled-components';

interface IProps {
  color?: string;
  width?: string;
}

const Container = styled.div`
  border: 1px solid lightgray;
  height: 30rem;
  width: 100%;
  max-width: 20rem;
`;

const ImageSection = styled.div`
  height: 70%;
  background-color: red;
`;

const TextSection = styled.div`
  .title {
    font-weight: 500;
  }
  .subtitle {
    font-weight: 200;
    color: red;
  }
`;

const Card: React.FunctionComponent<IProps> = () => (
  <Container>
    <ImageSection />
    <TextSection>
      <div className="subtitle">Hello World</div>
    </TextSection>
  </Container>
);

export default Card;
