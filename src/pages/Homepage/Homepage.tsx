import React, { useEffect } from 'react';
import LivestreamDispatchClass from '@/module/livestream/dispatch';
import LivestreamSelectorClass from '@/module/livestream/selectors';

import { Section, SearchInput, LineBreak } from '@/components/atoms';
import { CardGrid } from '@/components/molecules';

const onSearchChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  actionDispatch: LivestreamDispatchClass,
): void => {
  const { value } = event.currentTarget;
  actionDispatch.searchlivestreams(value);
};

const Homepage = () => {
  const LivestreamsDispatch = new LivestreamDispatchClass();
  const LivestreamSelector = new LivestreamSelectorClass();
  const { searchQuery } = LivestreamSelector.useLivestreamState();
  const filteredLiveStreams = LivestreamSelector.useFilteredLivestreams(
    searchQuery,
  );

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
      <Section>
        <SearchInput
          placeholder="search livestreams"
          onChange={(e) => {
            onSearchChangeHandler(e, LivestreamsDispatch);
          }}
        />
      </Section>
      <Section>
        <LineBreak color="lightgray" />
      </Section>
      {searchQuery && (
        <Section>
          <h1>
            SEARCH RESULTS FOR :
            {searchQuery.toUpperCase()}
          </h1>
        </Section>
      )}
      <CardGrid data={filteredLiveStreams} />
    </div>
  );
};

export default Homepage;
