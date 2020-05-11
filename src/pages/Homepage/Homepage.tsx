import React from 'react';
import { SquareImageBox, Section, SearchInput } from '@/components/atoms';

const Homepage = () => (
  <div>
    <Section bgColor="lightgray">
      <h1>FIND OUT ABOUT THE FRESHEST LIVESTREAMS ON DEMAND!</h1>
    </Section>
    <Section bgColor="lightgray">
      <h2>WHAT&apos;S ON TODAY?</h2>
    </Section>
    <Section bgColor="lightgray">
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
    </Section>
    <Section>
      <SearchInput />
    </Section>
  </div>
);

export default Homepage;
