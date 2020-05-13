import React from 'react';
import styled from 'styled-components';
import { ILivestream } from '@/type/types';

const Container = styled.div`
  border: 1px solid lightgray;
  height: 35rem;
  width: 100%;
  max-width: 20rem;
`;

const ImageSection = styled.div`
  height: 20rem;
  background-color: red;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    padding: 0.5rem;
  }
  .title {
    font-weight: 500;
    font-size: 1.2rem;
  }
  .subtitle {
    font-weight: 200;
    font-size: 0.8rem;
  }
  .moreDetail {
    font-size: 0.5rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
  }
`;

const Card: React.FunctionComponent<ILivestream> = (props) => {
  const {
    title, description, livestreamUrl, date,
  } = props;
  return (
    <Container>
      <ImageSection />
      <TextSection>
        <div className="title">{title}</div>
        <div className="subtitle">{description}</div>
        <div className="moreDetail">
          <div>{date}</div>
          <a href={livestreamUrl}>
            <div>Link to Stream</div>
          </a>
        </div>
      </TextSection>
    </Container>
  );
};

export default Card;
