import React from 'react';
import {
  SquareImageBox,
  Section,
  SearchInput,
  LineBreak,
  Card,
  Grid,
} from '@/components/atoms';

const Homepage = () => (
  <div>
    <Section backgroundColor="lightgray">
      <h1>FIND OUT ABOUT THE FRESHEST LIVESTREAMS ON DEMAND!</h1>
    </Section>
    <Section backgroundColor="lightgray">
      <h2>WHAT&apos;S ON TODAY?</h2>
    </Section>
    <Section backgroundColor="lightgray">
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
    </Section>
    <Section>
      <SearchInput />
    </Section>
    <Section>
      <LineBreak color="lightgray" />
    </Section>

    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </div>
);

export default Homepage;
