import React, { useEffect } from 'react';
import LivestreamDispatchClass from '@/module/livestream/dispatch';
import LivestreamSelectorClass from '@/module/livestream/selectors';

import { Section, SearchInput, LineBreak } from '@/components/atoms';
import { CardGrid } from '@/components/molecules';

const Homepage = () => {
  const LivestreamsDispatch = new LivestreamDispatchClass();
  const LivestreamSelector = new LivestreamSelectorClass();
  const livestreamState = LivestreamSelector.useLivestreamState();

  useEffect(() => {
    LivestreamsDispatch.fetchLivestreams();
  }, []);

  return (
    <div>
      <Section backgroundColor="lightgray">
        <h1>FIND OUT ABOUT THE FRESHEST LIVESTREAMS ON DEMAND!</h1>
      </Section>
      <Section backgroundColor="lightgray">
        <h2>WHAT&apos;S ON TODAY?</h2>
      </Section>
      <Section backgroundColor="lightgray">
        {/* <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox />
      <SquareImageBox /> */}
      </Section>
      <Section>
        <SearchInput />
      </Section>
      <Section>
        <LineBreak color="lightgray" />
      </Section>
      <CardGrid data={livestreamState.livestreams} />
    </div>
  );
};

export default Homepage;
