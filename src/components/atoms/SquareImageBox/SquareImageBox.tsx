import React from 'react';
import styled from 'styled-components';

interface ISquareSelectBoxProps {
  imageURL: string;
  streamURL: string;
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 10rem;
`;
const Image = styled.div<{ imageURL: string }>`
  background-color: red;
  width: 90%;
  height: 90%;
  border-radius: 20%;
`;
const TextContainer = styled.div`
  padding-top: 0.5rem;
`;

const SquareSelectBox: React.FunctionComponent<ISquareSelectBoxProps> = ({
  imageURL,
  title,
}) => (
  <Container>
    <Image imageURL={imageURL} />
    <TextContainer>{title}</TextContainer>
  </Container>
);

export default SquareSelectBox;
