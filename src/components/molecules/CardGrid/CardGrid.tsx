import React from 'react';
import { Grid, Card } from '@/components/atoms';
// import styled from 'styled-components';
import { ILivestream } from '@/type/types';

interface ICardGridProps {
  data: ILivestream[];
}

const generateCards = (data: ILivestream[]) => data.map((dataValue: ILivestream) => {
  const { id } = dataValue;
  return <Card key={id} {...dataValue} />;
});

const CardGrid: React.FunctionComponent<ICardGridProps> = ({ data }) => (
  <div>
    <Grid>{generateCards(data)}</Grid>
  </div>
);

export default CardGrid;
